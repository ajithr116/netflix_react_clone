// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import NavBar from "./components/NavBar/NavBar"
import Banner from "./components/Banner/Banner";
import RowPost from './components/RowPost/RowPost.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Banner/>
      <RowPost />
    </> 
  )
}

export default App
