import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { doc, onSnapshot, setDoc, updateDoc, collection } from 'firebase/firestore'
import { db } from '../firebase'
import { QUESTIONS, buildQuestion, generateShuffle } from '../data/questions'

const ANSWER_COLORS = ['red', 'blue', 'yellow', 'green']
const ANSWER_ICONS = ['▲', '⬥', '●', '■']

// ─── Sous-composants ──────────────────────────────────────────────────────────

function SetupForm({ onSubmit }) {
  const [lot, setLot] = useState(1)
  const [startFrom, setStartFrom] = useState(0)
  const [questionCount, setQuestionCount] = useState(10)
  const [timePerQuestion, setTimePerQuestion] = useState(20)

  const total = QUESTIONS[lot]?.length ?? 0
  const maxCount = total - startFrom

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit({ lot, startFrom, questionCount: Math.min(questionCount, maxCount), timePerQuestion })
  }

  return (
    <div className="page">
      <div className="setup-card">
        <h1>⚡ CyberFlash Quiz</h1>
        <h2>Configurer la partie</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Lot de questions</label>
            <div className="lot-selector">
              {[1, 2].map((l) => (
                <button
                  key={l}
                  type="button"
                  className={`lot-btn ${lot === l ? 'active' : ''}`}
                  onClick={() => { setLot(l); setStartFrom(0); setQuestionCount(Math.min(questionCount, QUESTIONS[l].length)) }}
                >
                  Lot {l}
                  <span>{QUESTIONS[l].length} questions</span>
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>
              Question de départ : <strong>{startFrom + 1}</strong>
              <span className="hint"> (sur {total})</span>
            </label>
            <input
              type="range"
              min={0}
              max={total - 1}
              value={startFrom}
              onChange={(e) => {
                const v = Number(e.target.value)
                setStartFrom(v)
                setQuestionCount(Math.min(questionCount, total - v))
              }}
            />
          </div>

          <div className="form-group">
            <label>
              Nombre de questions : <strong>{Math.min(questionCount, maxCount)}</strong>
              <span className="hint"> (max {maxCount})</span>
            </label>
            <input
              type="range"
              min={1}
              max={maxCount}
              value={Math.min(questionCount, maxCount)}
              onChange={(e) => setQuestionCount(Number(e.target.value))}
            />
          </div>

          <div className="form-group">
            <label>Temps par question</label>
            <div className="time-selector">
              {[5, 10, 15, 20, 30].map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`time-btn ${timePerQuestion === t ? 'active' : ''}`}
                  onClick={() => setTimePerQuestion(t)}
                >
                  {t}s
                </button>
              ))}
            </div>
          </div>

          <button type="submit" className="btn btn-create btn-full">
            Créer la salle
          </button>
        </form>
      </div>
    </div>
  )
}

function LobbyView({ roomCode, players, onStart }) {
  const url = `${window.location.origin}/play/${roomCode}`
  const [copied, setCopied] = useState(false)

  function copyCode() {
    navigator.clipboard.writeText(roomCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="page">
      <div className="lobby-container">
        <h2>Salle créée !</h2>
        <div className="room-code-display">
          <p className="room-code-label">Code de la salle</p>
          <div className="room-code" onClick={copyCode} title="Cliquer pour copier">
            {roomCode}
          </div>
          <button className="btn btn-ghost btn-sm" onClick={copyCode}>
            {copied ? '✓ Copié !' : '📋 Copier le code'}
          </button>
        </div>

        <p className="join-url">Rejoignez sur : <strong>{url}</strong></p>

        <div className="players-section">
          <h3>Joueurs connectés ({players.length})</h3>
          <div className="player-list">
            {players.length === 0 ? (
              <p className="no-players">En attente de joueurs…</p>
            ) : (
              players.map((p) => (
                <div key={p.id} className="player-chip">
                  <span className="player-avatar">{p.name[0].toUpperCase()}</span>
                  {p.name}
                </div>
              ))
            )}
          </div>
        </div>

        <button
          className="btn btn-create btn-full"
          onClick={onStart}
          disabled={players.length === 0}
        >
          {players.length === 0 ? 'En attente de joueurs…' : `Démarrer avec ${players.length} joueur${players.length > 1 ? 's' : ''}`}
        </button>
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

function QuestionViewHost({ question, questionNumber, totalQuestions, timeLeft, totalTime, answeredCount, playerCount, onSkip }) {
  return (
    <div className="page game-page">
      <div className="game-header">
        <span className="q-counter">Q {questionNumber}/{totalQuestions}</span>
        <TimerBar timeLeft={timeLeft} totalTime={totalTime} />
        <span className="answered-count">{answeredCount}/{playerCount} ✓</span>
      </div>

      <div className="question-box">
        <p className="question-text">{question.text}</p>
      </div>

      <div className="answer-grid">
        {question.answers.map((ans, i) => (
          <div key={i} className={`answer-tile answer-${ANSWER_COLORS[i]}`}>
            <span className="answer-icon">{ANSWER_ICONS[i]}</span>
            <span className="answer-text">{ans}</span>
          </div>
        ))}
      </div>

      <div className="host-controls">
        <button className="btn btn-ghost" onClick={onSkip}>⏭ Passer</button>
      </div>
    </div>
  )
}

function RevealViewHost({ question, players, currentQuestionIndex, onNext, isLast }) {
  const sorted = [...players].sort((a, b) => b.score - a.score)

  return (
    <div className="page game-page">
      <div className="game-header">
        <span className="q-counter">Résultats</span>
      </div>

      <div className="question-box">
        <p className="question-text">{question.text}</p>
      </div>

      <div className="answer-grid">
        {question.answers.map((ans, i) => (
          <div
            key={i}
            className={`answer-tile answer-${ANSWER_COLORS[i]} ${
              i === question.correct ? 'correct' : 'wrong'
            }`}
          >
            <span className="answer-icon">
              {i === question.correct ? '✓' : ANSWER_ICONS[i]}
            </span>
            <span className="answer-text">{ans}</span>
          </div>
        ))}
      </div>

      <div className="reveal-leaderboard">
        <h3>Classement</h3>
        {sorted.slice(0, 5).map((p, idx) => {
          const lastAnswerCorrect =
            p.answeredQuestionIndex === currentQuestionIndex && p.answerCorrect
          const pts = lastAnswerCorrect ? p.answerPoints : 0
          return (
            <div key={p.id} className={`lb-row ${idx === 0 ? 'lb-first' : ''}`}>
              <span className="lb-rank">{idx + 1}</span>
              <span className="lb-name">{p.name}</span>
              <span className="lb-score">{p.score}</span>
              {pts > 0 && <span className="lb-delta">+{pts}</span>}
            </div>
          )
        })}
      </div>

      <button className="btn btn-create btn-full" onClick={onNext}>
        {isLast ? '🏆 Voir les résultats finaux' : '▶ Question suivante'}
      </button>
    </div>
  )
}

function FinalView({ players, roomCode }) {
  const sorted = [...players].sort((a, b) => b.score - a.score)
  const medals = ['🥇', '🥈', '🥉']

  return (
    <div className="page">
      <div className="final-container">
        <h1>🏆 Résultats finaux</h1>
        <p className="room-code-label">Salle : {roomCode}</p>

        {sorted.slice(0, 3).length > 0 && (
          <div className="podium">
            {sorted.slice(0, 3).map((p, i) => (
              <div key={p.id} className={`podium-place podium-${i + 1}`}>
                <div className="podium-medal">{medals[i]}</div>
                <div className="podium-name">{p.name}</div>
                <div className="podium-score">{p.score} pts</div>
              </div>
            ))}
          </div>
        )}

        <div className="full-leaderboard">
          {sorted.map((p, i) => (
            <div key={p.id} className={`lb-row ${i < 3 ? 'lb-top' : ''}`}>
              <span className="lb-rank">{i < 3 ? medals[i] : i + 1}</span>
              <span className="lb-name">{p.name}</span>
              <span className="lb-score">{p.score} pts</span>
            </div>
          ))}
        </div>

        <button
          className="btn btn-ghost btn-full"
          onClick={() => window.location.href = '/'}
        >
          Retour à l'accueil
        </button>
      </div>
    </div>
  )
}

// ─── Composant principal ───────────────────────────────────────────────────────

export default function HostRoom() {
  const { roomCode } = useParams()
  const navigate = useNavigate()
  const [room, setRoom] = useState(null)
  const [players, setPlayers] = useState([])
  const [loading, setLoading] = useState(true)
  const [timeLeft, setTimeLeft] = useState(0)
  const revealLock = useRef(false)

  const hostId = (() => {
    let id = sessionStorage.getItem(`host_${roomCode}`)
    if (!id) { id = Math.random().toString(36).slice(2); sessionStorage.setItem(`host_${roomCode}`, id) }
    return id
  })()

  // Listeners Firestore
  useEffect(() => {
    const roomRef = doc(db, 'rooms', roomCode)
    const unsubRoom = onSnapshot(roomRef, (snap) => {
      setRoom(snap.exists() ? snap.data() : null)
      setLoading(false)
    })
    const unsubPlayers = onSnapshot(collection(db, 'rooms', roomCode, 'players'), (snap) => {
      setPlayers(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
    })
    return () => { unsubRoom(); unsubPlayers() }
  }, [roomCode])

  // Timer côté hôte
  useEffect(() => {
    if (!room || room.status !== 'question') return
    revealLock.current = false

    const total = room.timePerQuestion * 1000
    const tick = () => {
      const elapsed = Date.now() - room.questionStartTime
      const left = Math.max(0, total - elapsed)
      setTimeLeft(Math.ceil(left / 1000))
      if (left <= 0 && !revealLock.current) {
        revealLock.current = true
        updateDoc(doc(db, 'rooms', roomCode), { status: 'reveal' })
      }
    }
    tick()
    const interval = setInterval(tick, 200)
    return () => clearInterval(interval)
  }, [room?.status, room?.questionStartTime, room?.currentQuestionIndex])

  // Auto-reveal quand tous les joueurs ont répondu
  useEffect(() => {
    if (!room || room.status !== 'question' || players.length === 0) return
    const allAnswered = players.every(
      (p) => p.answeredQuestionIndex === room.currentQuestionIndex
    )
    if (allAnswered && !revealLock.current) {
      revealLock.current = true
      updateDoc(doc(db, 'rooms', roomCode), { status: 'reveal' })
    }
  }, [players, room?.status, room?.currentQuestionIndex])

  // ── Actions ──

  async function handleCreateRoom({ lot, startFrom, questionCount, timePerQuestion }) {
    const questionIndices = Array.from({ length: questionCount }, (_, i) => startFrom + i)
    const shuffles = questionIndices.map(() => generateShuffle().join(','))
    await setDoc(doc(db, 'rooms', roomCode), {
      hostId,
      status: 'lobby',
      lot,
      questionIndices,
      shuffles,
      currentQuestionIndex: 0,
      questionStartTime: null,
      timePerQuestion,
      createdAt: Date.now(),
    })
  }

  async function handleStartGame() {
    await updateDoc(doc(db, 'rooms', roomCode), {
      status: 'question',
      currentQuestionIndex: 0,
      questionStartTime: Date.now(),
    })
  }

  async function handleSkip() {
    if (revealLock.current) return
    revealLock.current = true
    await updateDoc(doc(db, 'rooms', roomCode), { status: 'reveal' })
  }

  async function handleNext() {
    const next = room.currentQuestionIndex + 1
    if (next >= room.questionIndices.length) {
      await updateDoc(doc(db, 'rooms', roomCode), { status: 'finished' })
    } else {
      await updateDoc(doc(db, 'rooms', roomCode), {
        status: 'question',
        currentQuestionIndex: next,
        questionStartTime: Date.now(),
      })
    }
  }

  // ── Rendu ──

  if (loading) return <div className="page loading-page"><div className="spinner" /><p>Chargement…</p></div>

  if (!room) return <SetupForm onSubmit={handleCreateRoom} />

  if (room.hostId !== hostId) {
    navigate(`/play/${roomCode}`)
    return null
  }

  const sortedPlayers = [...players].sort((a, b) => b.score - a.score)

  if (room.status === 'lobby') {
    return <LobbyView roomCode={roomCode} players={players} onStart={handleStartGame} />
  }

  if (room.status === 'question') {
    const q = buildQuestion(room, room.currentQuestionIndex)
    const answered = players.filter((p) => p.answeredQuestionIndex === room.currentQuestionIndex).length
    return (
      <QuestionViewHost
        question={q}
        questionNumber={room.currentQuestionIndex + 1}
        totalQuestions={room.questionIndices.length}
        timeLeft={timeLeft}
        totalTime={room.timePerQuestion}
        answeredCount={answered}
        playerCount={players.length}
        onSkip={handleSkip}
      />
    )
  }

  if (room.status === 'reveal') {
    const q = buildQuestion(room, room.currentQuestionIndex)
    return (
      <RevealViewHost
        question={q}
        players={sortedPlayers}
        currentQuestionIndex={room.currentQuestionIndex}
        onNext={handleNext}
        isLast={room.currentQuestionIndex >= room.questionIndices.length - 1}
      />
    )
  }

  if (room.status === 'finished') {
    return <FinalView players={sortedPlayers} roomCode={roomCode} />
  }

  return null
}
