import AboutSection from "../../sections/about";
import AddressSection from "../../sections/address";
import CarrousselSection from "../../sections/carroussel";
import CopyrightSection from "../../sections/copyright";
import Footer from "../../sections/footer";
import HomeSection from "../../sections/home";
import { MainContainer } from "./styles";

export default function HomePage() {
  return (
    <MainContainer>
      <HomeSection />
      <CarrousselSection />
      <AboutSection />
      <AddressSection />
      <Footer />
      <CopyrightSection />
    </MainContainer>
  );
}
