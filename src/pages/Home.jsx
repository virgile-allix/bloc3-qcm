import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function generateRoomCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
}

function generateId() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36)
}

export default function Home() {
  const navigate = useNavigate()
  const [mode, setMode] = useState(null) // 'create' | 'join'
  const [roomInput, setRoomInput] = useState('')
  const [nameInput, setNameInput] = useState('')
  const [error, setError] = useState('')

  function handleCreate() {
    const code = generateRoomCode()
    const hostId = generateId()
    sessionStorage.setItem(`host_${code}`, hostId)
    navigate(`/host/${code}`)
  }

  function handleJoin(e) {
    e.preventDefault()
    const code = roomInput.trim().toUpperCase()
    const name = nameInput.trim()
    if (!code || code.length < 4) return setError('Entrez un code de salle valide')
    if (!name) return setError('Entrez votre pseudo')
    const playerId = generateId()
    sessionStorage.setItem(`player_${code}`, JSON.stringify({ playerId, name }))
    navigate(`/play/${code}`)
  }

  return (
    <div className="page page-home">
      <div className="home-content">
        <div className="logo">
          <span className="logo-icon">⚡</span>
          <h1>CyberFlash</h1>
          <p className="logo-sub">Quiz Cybersécurité</p>
        </div>

        {!mode && (
          <div className="home-buttons">
            <button className="btn btn-create" onClick={handleCreate}>
              🎮 Créer une partie
            </button>
            <button className="btn btn-join" onClick={() => setMode('join')}>
              🚀 Rejoindre une partie
            </button>
          </div>
        )}

        {mode === 'join' && (
          <form className="join-form" onSubmit={handleJoin}>
            <h2>Rejoindre une partie</h2>
            <input
              className="input"
              type="text"
              placeholder="Code de la salle (ex: ABC123)"
              value={roomInput}
              onChange={(e) => { setRoomInput(e.target.value.toUpperCase()); setError('') }}
              maxLength={8}
              autoFocus
            />
            <input
              className="input"
              type="text"
              placeholder="Ton pseudo"
              value={nameInput}
              onChange={(e) => { setNameInput(e.target.value); setError('') }}
              maxLength={20}
            />
            {error && <p className="error">{error}</p>}
            <div className="form-actions">
              <button type="submit" className="btn btn-create">Rejoindre</button>
              <button type="button" className="btn btn-ghost" onClick={() => setMode(null)}>Retour</button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
