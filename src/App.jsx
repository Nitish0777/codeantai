import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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