
import './App.css'
import NavBar from "./components/NavBar/NavBar"
import Banner from "./components/Banner/Banner";
import RowPost from './components/RowPost/RowPost.jsx'
import {actions, originals, ComedyMovies, HorrorMovies} from './urls.js'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Banner/>
      <RowPost url={actions} title="Actions" isSmall/>
      <RowPost url={originals} title="NetFlex Originals"/>
      <RowPost url={ComedyMovies} title="Comedy movies" />
      {/* <RowPost url={HorrorMovies} title="Horror movies" /> */}
    </> 
  )
}

export default App
