import HeaderSection from "../../../component/HeaderSection/HeaderSection";
import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../Contact/ContactMe";
import Projects from "../Projects/Projects";
import Techs from "../Techs/Techs";
// import Banner from "../../../component/Banner/Banner";

const Home = () => {
  return (
    <>
      <HeaderSection />
      {/* <Banner></Banner> */}
      <AboutMe></AboutMe>
      <Techs></Techs>
      <Projects></Projects>
      <ContactMe></ContactMe>
    </>
  );
};

export default Home;
