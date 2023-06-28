import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "../Container/Container";
import { HiOutlineBars3BottomLeft, HiXMark } from "react-icons/hi2";
import Lottie from "lottie-react";
import dolwnLoad from '../../assets/74691-download-icon-set-1.json'



const Navbar = () => {
    const [dropMenu, setDropMenu] = useState(false)

    const handleScrollToContact = (event) => {
        event.preventDefault();
        const contactSection = document.getElementById('contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });
    };

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
            <li className="r">
                <Link target="_blank"
                    to='https://drive.google.com/drive/folders/1l7suRmmzdduuCdA9KuFf1rbcIrMn6bEW?usp=drive_link'
                    className={"default-style flex items-center  px-4 py-2 border-b-[4px] border-b-primary rounded-md shadow-sm shadow-cyan-400 hover:border-b-[4px] hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-400 hover:transition-all cursor-pointe"}
                >
                    <Lottie className="rounded-full w-8" animationData={dolwnLoad} />
                    Resume
                </Link>
            </li>
            <li>
                <NavLink
                    to='/projects'
                    className={({ isActive }) => (isActive ? "active-style" : 'default-style')}
                >
                    Projects
                </NavLink>
            </li>
            <li>
                <Link
                    to="/#contact" onClick={handleScrollToContact}
                    className={'default-style'}
                >
                    Contact me
                </Link>
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
                                className={`px-2 py-1 border-[3px] border-[#59deca] rounded-lg block md:hidden transition-all`}
                            >
                                {dropMenu ? (
                                    <HiXMark
                                        className={`w-6 h-6 text-[#59deca]`}
                                    />
                                ) : (
                                    <HiOutlineBars3BottomLeft
                                        className={`w-6 h-6 text-[#59deca]`}
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