
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
function App() {
   const [isOpen, setIsOpen] = useState(false);

  //  useEffect(()=>{
  //   console.log(isOpen)
  //  },[isOpen])

  return (
    <div className="flex h-screen w-screen overflow-x-hidden ">
         <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className='w-full ' >
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
          <Home/>
          </div>
         
    </div>
  )
}

export default App
