import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="main">
          <Navbar></Navbar>
        </div>
    </>
  )
}

export default App
