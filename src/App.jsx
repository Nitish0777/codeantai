import { useState } from 'react'
import './App.css'
import Side from './components/sidebar/Side'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Side />
    </>
  )
}

export default App
