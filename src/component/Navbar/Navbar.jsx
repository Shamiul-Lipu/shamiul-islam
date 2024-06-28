// import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "../Container/Container";
// import { HiOutlineBars3BottomLeft, HiXMark } from "react-icons/hi2";
import Lottie from "lottie-react";
import shamiulLogo from "../../assets/shamiul_lotti_logo.json";

const Navbar = () => {
  // const [dropMenu, setDropMenu] = useState(false);

  const handleScrollToContact = (event) => {
    event.preventDefault();
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  // navitems
  const navItems = (
    <>
      <ul className={`flex flex-row justify-center items-center gap-0 gap-4 `}>
        <li>
          <Link
            target="_blank"
            to="https://drive.google.com/file/d/10OJETmCe3nzxS4FobjrN24eAOyIC_b9z/view?usp=sharing"
            className={"default-style"}
          >
            Resume
          </Link>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "active-style" : "default-style"
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <Link
            to="/#contact"
            onClick={handleScrollToContact}
            className={"default-style"}
          >
            Contact me
          </Link>
        </li>
      </ul>
    </>
  );
  return (
    <header className=" py-6  w-full z-10 ">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-3">
          {/* logo & brand name */}
          <div className="flex gap-2 mx-auto md:ml-0  items-center h-7">
            <Link to="/">
              {/* <h3 className=" text-sky-600 text-2xl font-semibold">
                Shamiul Islam
              </h3> */}
              <Lottie
                className="h-1/2 w-full md:w-1/2"
                animationData={shamiulLogo}
              />
            </Link>
          </div>

          {/* nav */}
          <nav className="flex gap-2 justify-evenly items-center">
            {/* menu and dropdown*/}
            {/* <div className=""> */}
            {/* dropdown toggle button
              <button
                onClick={() => setDropMenu(!dropMenu)}
                className={`px-2 py-1 border-[3px] border-[#59deca] rounded-lg block md:hidden transition-all`}
              > */}
            {/* {dropMenu ? (
                  <HiXMark className={`w-6 h-6 text-[#59deca]`} />
                ) : (
                  <HiOutlineBars3BottomLeft
                    className={`w-6 h-6 text-[#59deca]`}
                  />
                )}
              </button> */}
            {/* nav items / menu items*/}
            {/* <div className={`${dropMenu ? "" : "hidden md:flex"}`}> */}
            <div className="flex">{navItems}</div>
            {/* </div> */}
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
