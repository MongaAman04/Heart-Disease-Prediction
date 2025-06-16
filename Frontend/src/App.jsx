import './App.css'
import { Header } from './components/header'
import { UserInteraction } from './pages/userinteraction'
import TestApp from './test'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import { Footer } from './components/footer'
import { Result } from './pages/result'
function App() {

  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/medicos" element={<TestApp />} />
          <Route path="/predictionform" element={<UserInteraction />} />
          <Route path="/result" element={<Result />} />
        </Routes>
    </Router>
  )
}

export default App
