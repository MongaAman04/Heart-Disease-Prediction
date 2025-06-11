import './App.css'
import { Header } from './components/header'
import { UserInteraction } from './pages/userinteraction'
import TestApp from './test'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import { Home } from './pages/Home'
import { About } from './pages/About'
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
