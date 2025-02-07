import NavBar from "../components/Navbar";
// import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import AboutMe from "../components/AboutMe";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactInformation from "../components/ContactInformation";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <header className="sticky top-0 z-50">
        <NavBar />
      </header>

      {/* Banner Section */}
      <div className="flex-grow">
        <Banner />
      </div>

      <div className="flex-grow">
         <AboutMe></AboutMe>
      </div>


      <div className="flex-grow"> 
        <SkillsSection></SkillsSection>       
      </div>
      <div className="flex-grow"> 
        <ProjectsSection></ProjectsSection>
      </div>
      <div className="flex-grow"> 
        <ContactInformation></ContactInformation>
      </div>
      {/* Dynamic Content Section */}
      {/* <main className="flex-grow min-h-[calc(100vh-350px)]">
        <Outlet />
      </main> */}

      {/* Footer Section */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
