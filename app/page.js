import HeroSection from "./Components/HeroSection";
import ExperienceComponent from "./Components/About";
import Process from "./Components/Process";
import ConsultationSection from "./Components/ConsultationSection";
import CaseStudies from "./Components/CaseStudies";
import OurTeam from "./Components/OurTeam";
import FaqSection from "./Components/FaqSection";
import PopularNews from "./Components/PopularNews";
export default function Home() {
  return (
    <>
  
   <HeroSection /> 
     <Process /> 
   <ExperienceComponent /> 
    <ConsultationSection /> 
    <CaseStudies />
   {/* <OurTeam /> */}
   {/* <FaqSection />
   <PopularNews />  */}
   </>

  );
}
