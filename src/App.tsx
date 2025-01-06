import { MainContainer } from './App'
import AboutSection from './sections/about'
import CarrousselSection from './sections/carroussel'
import HomeSection from './sections/home'
import AddressSection from './sections/address'
import Footer from './sections/footer'
import CopyrightSection from './sections/copyright'

function App() {


  return (
    <MainContainer>
      <HomeSection/>
      <CarrousselSection/>
      <AboutSection/>
      <AddressSection/>
      <Footer/>
      <CopyrightSection/>
    </MainContainer>
  )
}

export default App
