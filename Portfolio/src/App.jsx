import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './componants/Header'
import Home from './componants/Home'
import About from './componants/About'
import Skills from './componants/Skills'
import Contact from './componants/Contact'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
      
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Skills' element={<Skills/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        {/* <Route path='/services' element={<h1>Services</h1>}/>
        <Route path='/contact' element={<h1>Contact</h1>}/> */}

        {/* <Route path='*' element={<h1>Page Not Found</h1>}/> */}

        
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
