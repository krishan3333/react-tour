import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 text-black'>Tailwind test</h1>
        <Card userName="luckyman nft"/>
        <Card userName="bored ape nft " price="$0.02"/>
    </>
  )
}

export default App
