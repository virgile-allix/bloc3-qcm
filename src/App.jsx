import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import HostRoom from './pages/HostRoom'
import PlayerRoom from './pages/PlayerRoom'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/host/:roomCode" element={<HostRoom />} />
        <Route path="/play/:roomCode" element={<PlayerRoom />} />
      </Routes>
    </HashRouter>
  )
}
