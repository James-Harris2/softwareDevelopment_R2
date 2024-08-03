import {Routes, Route} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'

function App() {
  

  return (
    <div className='app'>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<About />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>


    </div>
  )
}

export default App
