import Navbar from './Navbar'
import Footer from './Footer'
import DonationsPage from './DonationsPage'
import CareersPage from './CareersPage'
import ContactUsPage from './ContactUsPage'
import MainPageBody from './MainPageBody'
import Homepage from './Homepage'
import './App.css'
import './index.css'
import "../src/scss/styles.scss"
import * as bootstrap from "bootstrap";

const isLoggedIn = false;

function App() {

  return (
    <div>
      <Navbar status={isLoggedIn}/>
      <MainPageBody />
      <Footer />
    </div>
  )
}

export default App
