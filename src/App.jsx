import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/navbar'
import Electric from './pages/Electric'
import Flood from './pages/Flood'
import Labyrinth from './pages/Labyrinth'
import Tales from './pages/Tales'
import Home from './pages/Home'
import { Route, Routes } from "react-router-dom"
import Particles from "react-tsparticles";
import configParticles from './config/configParticles'
import accordionItem from './components/accordionItem'

//import SimpleAccordion from './components/SimpleAccordian'

function App () {
   const [selected, setSelected] = useState(null)
   const toggle = i => {
      if (selected == i) {
         return setSelected(null)
      }
      setSelected(i)
   }

   const data = [
      {
        description: 'Description 1',
        content:
               `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et porttitor felis. Curabitur ac venenatis tortor. 
               Fusce sollicitudin laoreet purus et scelerisque. Cras at fringilla ipsum. 
               Phasellus sed purus ut nunc ultrices fermentum 
               feugiat et nunc. Vestibulum vehicula sodales eros eu pulvinar. 
               Suspendisse ultrices consectetur ornare. Sed imperdiet dui sit amet turpis 
               sagittis ullamcorper.`,
      },
      {
        description: 'Description 2',
        content:
               `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et porttitor felis. Curabitur ac venenatis tortor. 
               Fusce sollicitudin laoreet purus et scelerisque. Cras at fringilla ipsum. 
               Phasellus sed purus ut nunc ultrices fermentum 
               feugiat et nunc. Vestibulum vehicula sodales eros eu pulvinar. 
               Suspendisse ultrices consectetur ornare. Sed imperdiet dui sit amet turpis 
               sagittis ullamcorper.`,
      },
      {
        description: 'Description 3',
        content:
               `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et porttitor felis. Curabitur ac venenatis tortor. 
               Fusce sollicitudin laoreet purus et scelerisque. Cras at fringilla ipsum. 
               Phasellus sed purus ut nunc ultrices fermentum 
               feugiat et nunc. Vestibulum vehicula sodales eros eu pulvinar. 
               Suspendisse ultrices consectetur ornare. Sed imperdiet dui sit amet turpis 
               sagittis ullamcorper.`,
      }
   ]

   window.onload = function () {
      setTimeout(() =>  {
         const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting && entry.intersectionRatio >= 0.0) {
                  console.log('visible')
                  entry.target.classList.add('show')
               }  else {
                  console.log('not visible')
                  entry.target.classList.remove('show')
               }
            })
         })
      
         const hiddenElement = document.querySelectorAll('.hidden')
         hiddenElement.forEach((element) => observer.observe(element))
      }, 1000)
   }

   return (
   // <div className='App' style={{position: 'relative', overflow: 'hidden'}}>
   <> 
      <Navbar />
      <div className='wrapper'>
         <div className='accordion'>
            {data.map((item, i) =>(
               <div className='item'>
                  <div className='title' onClick={() => toggle(i)}>
                     <h2>{item.description}</h2>
                     <span>{selected === i ? '-' : '+'}</span>
                  </div>
                  <div className={selected === i ? 'content show' : 'content'}>
                     {item.content}
                  </div>
               </div>
            ))}
         </div>
      </div>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/Electric" element={<Electric/>} />
         <Route path="/Flood" element={<Flood/>} />
         <Route path="/Labyrinth" element={<Labyrinth/>} />
         <Route path="/Tales" element={<Tales/>} />
      </Routes>
   </>
   )
}

export default App
