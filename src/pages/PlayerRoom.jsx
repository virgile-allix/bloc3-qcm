import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { doc, onSnapshot, setDoc, updateDoc, collection } from 'firebase/firestore'
import { db } from '../firebase'
import { buildQuestion } from '../data/questions'

const ANSWER_COLORS = ['red', 'blue', 'yellow', 'green']
const ANSWER_ICONS = ['▲', '⬥', '●', '■']

// ─── Sous-composants ──────────────────────────────────────────────────────────

function JoinForm({ roomCode, onJoin, roomNotFound }) {
  const stored = (() => {
    try { return JSON.parse(sessionStorage.getItem(`player_${roomCode}`) || 'null') } catch { return null }
  })()
  const [name, setName] = useState(stored?.name || '')

  function handleSubmit(e) {
    e.preventDefault()
    const n = name.trim()
    if (!n) return
    onJoin(n)
  }

  return (
    <div className="page page-home">
      <div className="home-content">
        <div className="logo">
          <span className="logo-icon">⚡</span>
          <h1>CyberFlash</h1>
        </div>
        {roomNotFound ? (
          <div className="error-box">
            <p>❌ Salle introuvable : <strong>{roomCode}</strong></p>
            <p>Vérifie le code ou attends que l'hôte crée la partie.</p>
            <button className="btn btn-ghost" onClick={() => window.location.href = '/'}>Retour</button>
          </div>
        ) : (
          <form className="join-form" onSubmit={handleSubmit}>
            <h2>Rejoindre la salle</h2>
            <div className="room-badge">{roomCode}</div>
            <input
              className="input"
              type="text"
              placeholder="Ton pseudo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={20}
              autoFocus
            />
            <button type="submit" className="btn btn-create btn-full">Rejoindre !</button>
          </form>
        )}
      </div>
    </div>
  )
}

function WaitingLobby({ playerName, players }) {
  return (
    <div className="page">
      <div className="lobby-container waiting-player">
        <div className="pulse-icon">⚡</div>
        <h2>Tu es dans la salle !</h2>
        <div className="player-chip self-chip">
          <span className="player-avatar">{playerName[0].toUpperCase()}</span>
          {playerName}
        </div>
        <p className="waiting-text">En attente du démarrage par l'hôte…</p>
        <div className="player-list small">
          <p className="hint">{players.length} joueur{players.length > 1 ? 's' : ''} connecté{players.length > 1 ? 's' : ''}</p>
          {players.map((p) => (
            <div key={p.id} className="player-chip-sm">{p.name}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TimerBar({ timeLeft, totalTime }) {
  const pct = Math.max(0, (timeLeft / totalTime) * 100)
  const color = pct > 50 ? '#4ade80' : pct > 25 ? '#facc15' : '#f87171'
  return (
    <div className="timer-wrap">
      <div className="timer-track">
        <div className="timer-fill" style={{ width: `${pct}%`, background: color }} />
      </div>
      <div className="timer-number" style={{ color }}>{timeLeft}</div>
    </div>
  )
}

function QuestionViewPlayer({ question, questionNumber, totalQuestions, timeLeft, totalTime, onAnswer, answered }) {
  return (
    <div className="page game-page">
      <div className="game-header">
        <span className="q-counter">Q {questionNumber}/{totalQuestions}</span>
        <TimerBar timeLeft={timeLeft} totalTime={totalTime} />
      </div>

      <div className="question-box">
        <p className="question-text">{question.text}</p>
      </div>

      {answered ? (
        <div className="waiting-answer">
          <div className="waiting-spinner">⏳</div>
          <p>Réponse enregistrée !</p>
          <p className="hint">En attente des autres joueurs…</p>
        </div>
      ) : (
        <div className="answer-grid">
          {question.answers.map((ans, i) => (
            <button
              key={i}
              className={`answer-tile answer-${ANSWER_COLORS[i]} answer-clickable`}
              onClick={() => onAnswer(i)}
            >
              <span className="answer-icon">{ANSWER_ICONS[i]}</span>
              <span className="answer-text">{ans}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function RevealViewPlayer({ question, myAnswerIndex, myCorrect, myPoints, myScore, myRank, totalPlayers }) {
  const didAnswer = myAnswerIndex !== null && myAnswerIndex !== undefined

  return (
    <div className="page game-page">
      <div className="question-box">
        <p className="question-text">{question.text}</p>
      </div>

      <div className="answer-grid">
        {question.answers.map((ans, i) => {
          let cls = `answer-tile answer-${ANSWER_COLORS[i]}`
          if (i === question.correct) cls += ' correct'
          else if (didAnswer && i === myAnswerIndex) cls += ' wrong'
          else cls += ' dimmed'
          return (
            <div key={i} className={cls}>
              <span className="answer-icon">
                {i === question.correct ? '✓' : ANSWER_ICONS[i]}
              </span>
              <span className="answer-text">{ans}</span>
            </div>
          )
        })}
      </div>

      <div className="reveal-result">
        {!didAnswer ? (
          <div className="result-badge result-miss">
            <span className="result-icon">⏰</span>
            <span>Temps écoulé !</span>
          </div>
        ) : myCorrect ? (
          <div className="result-badge result-correct">
            <span className="result-icon">✓</span>
            <div>
              <p>Bonne réponse !</p>
              <p className="points-earned">+{myPoints} pts</p>
            </div>
          </div>
        ) : (
          <div className="result-badge result-wrong">
            <span className="result-icon">✗</span>
            <span>Mauvaise réponse</span>
          </div>
        )}
        <div className="score-summary">
          <span>Score total : <strong>{myScore} pts</strong></span>
          {myRank && <span>Rang : <strong>{myRank}/{totalPlayers}</strong></span>}
        </div>
      </div>
    </div>
  )
}

function FinalViewPlayer({ players, myPlayerId }) {
  const sorted = [...players].sort((a, b) => b.score - a.score)
  const myRank = sorted.findIndex((p) => p.id === myPlayerId) + 1
  const me = sorted.find((p) => p.id === myPlayerId)
  const medals = ['🥇', '🥈', '🥉']

  return (
    <div className="page">
      <div className="final-container">
        <h1>🏆 Résultats finaux</h1>

        {me && (
          <div className={`my-result ${myRank <= 3 ? 'my-result-top' : ''}`}>
            <p>{myRank <= 3 ? medals[myRank - 1] : `#${myRank}`} {me.name}</p>
            <p className="my-score">{me.score} pts</p>
          </div>
        )}

        <div className="full-leaderboard">
          {sorted.map((p, i) => (
            <div key={p.id} className={`lb-row ${p.id === myPlayerId ? 'lb-me' : ''} ${i < 3 ? 'lb-top' : ''}`}>
              <span className="lb-rank">{i < 3 ? medals[i] : i + 1}</span>
              <span className="lb-name">{p.name}{p.id === myPlayerId ? ' (toi)' : ''}</span>
              <span className="lb-score">{p.score} pts</span>
            </div>
          ))}
        </div>

        <button className="btn btn-ghost btn-full" onClick={() => window.location.href = '/'}>
          Retour à l'accueil
        </button>
      </div>
    </div>
  )
}

// ─── Composant principal ───────────────────────────────────────────────────────

export default function PlayerRoom() {
  const { roomCode } = useParams()
  const [room, setRoom] = useState(undefined) // undefined = loading
  const [players, setPlayers] = useState([])
  const [timeLeft, setTimeLeft] = useState(0)
  const [joined, setJoined] = useState(false)

  // Récupère l'identité du joueur depuis sessionStorage
  const storedInfo = (() => {
    try { return JSON.parse(sessionStorage.getItem(`player_${roomCode}`) || 'null') } catch { return null }
  })()
  const [playerId] = useState(storedInfo?.playerId || null)
  const [playerName] = useState(storedInfo?.name || '')

  // Listeners Firestore
  useEffect(() => {
    const unsubRoom = onSnapshot(doc(db, 'rooms', roomCode), (snap) => {
      setRoom(snap.exists() ? snap.data() : null)
    })
    const unsubPlayers = onSnapshot(collection(db, 'rooms', roomCode, 'players'), (snap) => {
      setPlayers(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
    })
    return () => { unsubRoom(); unsubPlayers() }
  }, [roomCode])

  // Vérifier si déjà dans la salle
  useEffect(() => {
    if (!playerId || players.length === 0) return
    const found = players.find((p) => p.id === playerId)
    if (found) setJoined(true)
  }, [players, playerId])

  // Timer joueur
  useEffect(() => {
    if (!room || room.status !== 'question') return
    const total = room.timePerQuestion * 1000
    const tick = () => {
      const elapsed = Date.now() - room.questionStartTime
      setTimeLeft(Math.max(0, Math.ceil((total - elapsed) / 1000)))
    }
    tick()
    const interval = setInterval(tick, 200)
    return () => clearInterval(interval)
  }, [room?.status, room?.questionStartTime, room?.currentQuestionIndex])

  // ── Actions ──

  async function handleJoin(name) {
    const stored = (() => {
      try { return JSON.parse(sessionStorage.getItem(`player_${roomCode}`) || 'null') } catch { return null }
    })()
    const pid = stored?.playerId || Math.random().toString(36).slice(2) + Date.now().toString(36)
    sessionStorage.setItem(`player_${roomCode}`, JSON.stringify({ playerId: pid, name }))
    window.location.reload() // reload pour prendre en compte le nouveau state
  }

  async function handleAnswer(answerIndex) {
    if (!room || !playerId) return
    const q = buildQuestion(room, room.currentQuestionIndex)
    const isCorrect = answerIndex === q.correct
    const responseTime = Date.now() - room.questionStartTime
    const timeLimitMs = room.timePerQuestion * 1000
    const points = isCorrect
      ? Math.max(100, Math.round(1000 - (responseTime / timeLimitMs) * 900))
      : 0

    const me = players.find((p) => p.id === playerId)
    const prevScore = me?.score ?? 0

    await updateDoc(doc(db, 'rooms', roomCode, 'players', playerId), {
      answeredQuestionIndex: room.currentQuestionIndex,
      answerIndex: answerIndex,
      answerCorrect: isCorrect,
      answerPoints: points,
      score: prevScore + points,
    })
  }

  // ── Rendu ──

  if (room === undefined) {
    return <div className="page loading-page"><div className="spinner" /><p>Connexion…</p></div>
  }

  // La salle n'existe pas encore ou mauvais code
  if (room === null) {
    return <JoinForm roomCode={roomCode} onJoin={handleJoin} roomNotFound={true} />
  }

  // Pas encore rejoint
  if (!joined || !playerId) {
    return <JoinForm roomCode={roomCode} onJoin={handleJoin} roomNotFound={false} />
  }

  const me = players.find((p) => p.id === playerId)
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score)
  const myRank = sortedPlayers.findIndex((p) => p.id === playerId) + 1

  if (room.status === 'lobby') {
    return <WaitingLobby playerName={playerName} players={players} />
  }

  if (room.status === 'question') {
    const q = buildQuestion(room, room.currentQuestionIndex)
    const alreadyAnswered = me?.answeredQuestionIndex === room.currentQuestionIndex
    return (
      <QuestionViewPlayer
        question={q}
        questionNumber={room.currentQuestionIndex + 1}
        totalQuestions={room.questionIndices.length}
        timeLeft={timeLeft}
        totalTime={room.timePerQuestion}
        onAnswer={handleAnswer}
        answered={alreadyAnswered}
      />
    )
  }

  if (room.status === 'reveal') {
    const q = buildQuestion(room, room.currentQuestionIndex)
    const answeredThisQ = me?.answeredQuestionIndex === room.currentQuestionIndex
    return (
      <RevealViewPlayer
        question={q}
        myAnswerIndex={answeredThisQ ? me?.answerIndex : null}
        myCorrect={answeredThisQ ? me?.answerCorrect : false}
        myPoints={answeredThisQ ? me?.answerPoints : 0}
        myScore={me?.score ?? 0}
        myRank={myRank}
        totalPlayers={players.length}
      />
    )
  }

  if (room.status === 'finished') {
    return <FinalViewPlayer players={sortedPlayers} myPlayerId={playerId} />
  }

  return null
}
