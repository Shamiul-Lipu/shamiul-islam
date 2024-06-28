import { Outlet } from "react-router-dom";
import Socials from "../pages/Home/Socials/Socials";
import Footer from "../pages/Home/Footer/Footer";
// import Navbar from "../component/Navbar/Navbar";

const Main = () => {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <main className=" bg-primary">
        <Outlet></Outlet>
        <Socials></Socials>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Main;
