
import AboutMe from '../components/AboutMe/AboutMe'
import CardsComp from '../components/Cards/cardsComp'
import Footer from '../components/Footer/Footer'
import MyNavbar from '../components/NavbarComp/Navbar'
import '../routes/HomePage.css'


const HomePage = () => {
  return (
    <div>
      <MyNavbar/>
      <AboutMe/>
      <CardsComp/>
      <Footer/>
      
    </div>
  )
}

export default HomePage

