import HomePage from './pages/HomePage'
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
 
  return (
    <> 

<Router>
  <Routes>
    <Route element={<HomePage />} index path='/' />
    <Route path='/About' element={<About />} />
    <Route path='/Portfolio' element={<Work />} />
    <Route path='/Contact' element={<Contact />} />
  </Routes>
  <Footer />
</Router>

  </>
  )
}

export default App
