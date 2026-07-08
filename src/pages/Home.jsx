import BudayaTradisiSection from "../components/sections/BudayaTradisiSection";
import SejarahSection from "../components/sections/SejarahSection";
import KulinerSection from "../components/sections/KulinerSection";
import DestinasiWisataSection from "../components/sections/DestinasiWisataSection";
import TeknologiModernSection from "../components/sections/TeknologiModernSection";
import PetaSection from "../components/sections/PetaSection";
import KontakSection from "../components/sections/KontakSection";
import Hero from "../components/sections/Hero";

function Home() {
  return (
    <>
      <main>
        <Hero />
        <SejarahSection />
        <BudayaTradisiSection />
        <KulinerSection />
        <DestinasiWisataSection />
        <TeknologiModernSection />
        <PetaSection />
        <KontakSection />
      </main>
    </>
  );
}

export default Home;
