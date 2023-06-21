import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "../Container/Container";
import { HiOutlineBars3BottomLeft, HiXMark } from "react-icons/hi2";



const Navbar = () => {
    const [dropMenu, setDropMenu] = useState(false)


    // navitems 
    const navItems = <>
        <ul className={`flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center gap-0 md:gap-4 `}>
            <li>
                <NavLink
                    to='/'
                    className={({ isActive }) => (isActive ? "active-style" : 'default-style')}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/instructors'
                    className={({ isActive }) => (isActive ? "active-style" : 'default-style')}
                >
                    Resume
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/classes'
                    className={({ isActive }) => (isActive ? "active-style" : 'default-style')}
                >
                    Contact
                </NavLink>
            </li>
        </ul>

    </>
    return (
        <header className="bg-[#0f172a] py-4 fixed w-full z-10 shadow-md customDark">
            <Container>
                <div className="flex flex-col md:flex-row justify-between">
                    {/* logo & brand name */}
                    <div className="flex gap-2 mx-auto md:ml-0  items-center">
                        <Link to='/'><h3 className=" text-sky-600 text-2xl font-semibold">Shamiul Islam</h3></Link>
                    </div>

                    {/* nav */}
                    <nav className="flex gap-2 justify-between md:justify-evenly items-start md:items-center">

                        {/* menu and dropdown*/}
                        <div className="">
                            {/* dropdown toggle button */}
                            <button
                                onClick={() => setDropMenu(!dropMenu)}
                                className={`px-2 py-1 border-[3px] border-stone-600 rounded-lg block md:hidden`}
                            >
                                {dropMenu ? (
                                    <HiXMark
                                        className={`w-6 h-6`}
                                    />
                                ) : (
                                    <HiOutlineBars3BottomLeft
                                        className={`w-6 h-6`}
                                    />
                                )}
                            </button>
                            {/* nav items / menu items*/}
                            <div className={`${dropMenu ? '' : 'hidden md:flex'}`}>
                                {
                                    navItems
                                }
                            </div>
                        </div>

                    </nav>
                </div>
            </Container>
        </header>
    );
};

export default Navbar;