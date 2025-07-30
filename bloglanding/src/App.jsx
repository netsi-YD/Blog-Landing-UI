import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Intro from './components/Intro.jsx'
import Hobbies from './components/Hobbies.jsx'
import Contents from './components/Contents.jsx'
import Footer from './components/Footer.jsx'
import  About from './components/about.jsx'
import Contact from './components/contact.jsx'
import Nav from './components/Nav.jsx'
import Login from './components/Login.jsx'
function App() {
  
   return (
    <div className=" space-y-4 bg-gray-50 font-sans text-gray-800 container mt-1 mx-auto px-4 sm:px-6 lg:px-8">
             <Nav/>
<Login/>
              <Intro/>

 <About/>
      <Hobbies/>

     <Contents/>
          <Contact/>
     <Footer/>


        </div>

  );
}


export default App
