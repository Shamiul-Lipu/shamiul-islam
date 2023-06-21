import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";

const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <main className="py-[60px]">
                <Outlet></Outlet>
            </main>
        </>
    );
};

export default Main;