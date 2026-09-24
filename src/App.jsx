import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer'
import GameCard from './components/GameCard'
import Header from './components/Header'
import Contato from './pages/Contato'
import Error from './pages/Error'
import Home from './pages/Home'
import Jogos from './pages/Jogos'
import Login from './pages/Login'

const App = () => {
  return (
    <Router>
        <div className='min-h-screen flex flex-col justify-between bg-[#141414] pt-4'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jogos" element={<Jogos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
    </Router>
  )
}

export default App
