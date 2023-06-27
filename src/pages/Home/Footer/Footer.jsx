import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaDev, FaTwitter, FaRegArrowAltCircleUp } from "react-icons/fa";
import bgImage from '../../../assets/blob-scene-haikei.png'

const Footer = () => {

    const handleScrollToContact = (event) => {
        event.preventDefault();
        const contactSection = document.getElementById('to-top');
        contactSection.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="footer footer-center pt-10 bg-primary  text-textPrimary bg-cover bg-repeat-y pb-10" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="text-textSecondary">
                <p className="font-bold">
                    Shamiul Islam <br />
                    Copyright © 2023 - All right reserved</p>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4 list-none">
                    <li className="hover:bg-cyan-700 p-2 rounded-lg transition-all cursor-pointer " >
                        <Link target="_blank" to='https://github.com/Shamiul-Lipu'>< FaGithub className="w-6 h-6" /></Link>
                    </li>
                    <li className="hover:bg-cyan-700 p-2 rounded-lg transition-all cursor-pointer" >
                        <Link target="_blank" to='https://www.linkedin.com/in/shamiul-islam-lipu-7033a7135/'><FaLinkedinIn className="w-6 h-6" /></Link>
                    </li>
                    <li className="hover:bg-cyan-700 p-2 rounded-lg transition-all cursor-pointer" >
                        <Link target="_blank" to='https://dev.to/shamiul'><FaDev className="w-6 h-6" /></Link>
                    </li>
                    <li className="hover:bg-cyan-700 p-2 rounded-lg transition-all cursor-pointer" >
                        <Link target="_blank" to='https://twitter.com/LipuShamiul'><FaTwitter className="w-6 h-6" /></Link>
                    </li>
                </div>
            </div>
            <Link onClick={handleScrollToContact} to="/#to-top" className="cursor-pointer text-cyan-300 text-xs"><FaRegArrowAltCircleUp className="w-6 h-6 animate-bounce" /> Go to top</Link>
        </footer>
    );
};

export default Footer;