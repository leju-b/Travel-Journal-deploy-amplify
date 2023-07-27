import './App.css'
import Navbar from "./components/NavBar/navbar"
import Hero from "./components/Hero_section/hero"
import data from "./components/Hero_section/data"
import Footer from './components/Footer/footer'
function App() {
  const DataElements = data.map(datas => {
    return <Hero {...datas} />
  })
  return (
    <>
    <Navbar/>
    <div className="Hero">
      {DataElements}
    </div>
    <Footer/>
    </>
  )
}

export default App
