import AboutMe from "./components/AboutMe/AboutMe"
import CardsComp from "./components/CardsComp/cardsComp"
import MyNavbar from "./components/NavbarComp/Navbar"
import Footer from "./components/Footer/Footer"
import '../src/App.css'


const App = () => {
  return (
    <div>
      <MyNavbar/>
      <AboutMe/>
      <CardsComp/>
      <Footer/>
      
    </div>
  )
}

export default App

