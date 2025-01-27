import React from "react";
import About from "../Components/About";
import ConsultationSection from "../Components/ConsultationSection";
import OurTeam from "../Components/OurTeam";
import PageBanner from "../Components/PageBanner";
import ProcessComponent from "../Components/About Page/ProcessComponent";
import ProductGrid from "../Components/About Page/ProductGrid";
import AboutContent from "../Components/AboutContent";

function page() {
  return (
    <>
      <AboutContent />
      <ProductGrid />
      <ProcessComponent />
      {/* <OurTeam /> */}
    </>
  );
}

export default page;
