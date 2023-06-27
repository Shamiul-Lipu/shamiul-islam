import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import Socials from "../pages/Home/Socials/Socials";
import Footer from "../pages/Home/Footer/Footer";

const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <main className="pt-[60px] bg-primary">
                <Outlet></Outlet>
                <Socials></Socials>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Main;