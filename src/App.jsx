import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import LoginPage from './LoginPage'
import DashboardPage from './DashboardPage'
import ClubLeaderDashboard from './ClubLeaderDashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/club-dashboard" element={<ClubLeaderDashboard />} />
      </Routes>
    </Router>
  )
}

export default App
