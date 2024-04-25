import HomePage from './pages/HomePage'
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
 
  return (
    <> 

<BrowserRouter>
  <Routes>
    <Route element={<HomePage />} index path='/' />
    <Route path='/Home'  element={<HomePage />}/>
    <Route path='/About' element={<About />} />
    <Route path='/Portfolio' element={<Work />} />
    <Route path='/Contact' element={<Contact />} />
  </Routes>
  <Footer />
</BrowserRouter>

  </>
  )
}

export default App
