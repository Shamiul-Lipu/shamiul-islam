import Banner from "../../../component/Banner/Banner";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import Techs from "../Techs/Techs";


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <AboutMe></AboutMe>
            {/* <Techs></Techs> */}
            <Projects></Projects>
        </>
    );
};

export default Home;