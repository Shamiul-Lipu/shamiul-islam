import Banner from "../../../component/Banner/Banner";
import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../Contact/ContactMe";
import Projects from "../Projects/Projects";
import Techs from "../Techs/Techs";


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Techs></Techs>
            <Projects></Projects>
            <ContactMe></ContactMe>
        </>
    );
};

export default Home;