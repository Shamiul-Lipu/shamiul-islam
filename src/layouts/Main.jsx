import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import Socials from "../pages/Home/Socials/Socials";

const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <main className="py-[60px] bg-primary">
                <Outlet></Outlet>
                <Socials></Socials>
            </main>
        </>
    );
};

export default Main;