import ContactMe from "../components/ContactMe";
import CustomCursor from "../components/CustomCursor";
import Educations from "../components/Educations";
import Experiences from "../components/Experiences";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import HowIAm from "../components/HowIAm";
import Navbar from "../components/Navbar";
import SkillSet from "../components/SkillSet";
// import TrustedByTeams from "../components/TrustedByTeams";
// import EveryThingYouNeed  from "../components/EveryThingYouNeed ";


const Home = () => {
  return (
    <div>
      <CustomCursor/>
      <Navbar />
      <HeroSection />
      <HowIAm/>
      <Experiences/>
      <SkillSet/>
      <Educations/>
      {/* <EveryThingYouNeed /> */}
      {/* <TrustedByTeams/> */}
      <ContactMe/>  
      <Footer />
    </div>
  );
};

export default Home;
