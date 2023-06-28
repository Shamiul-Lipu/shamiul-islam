import { FaGithub, FaLinkedinIn, FaDev, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Socials = () => {
    return (
        <>
            <ul className="font-bold text-primary fixed bottom-10 bg-[#38bdf8] p-1 ml-1 mx-auto z-30 gap-1 flex flex-col rounded-lg opacity-40 hover:opacity-100 border-[2px] border-cyan-200 hover:border-primary border-opacity-100">
                <li className="hover:bg-cyan-200 p-1 rounded-lg transition-all cursor-pointer " >
                    <Link target="_blank" to='https://github.com/Shamiul-Lipu'>< FaGithub className="w-4 h-4" /></Link>
                </li>
                <li className="hover:bg-cyan-200 p-1 rounded-lg transition-all cursor-pointer" >
                    <Link target="_blank" to='https://www.linkedin.com/in/shamiul-islam-lipu-7033a7135/'><FaLinkedinIn className="w-4 h-4" /></Link>
                </li>
                <li className="hover:bg-cyan-200 p-1 rounded-lg transition-all cursor-pointer" >
                    <Link target="_blank" to='https://dev.to/shamiul'><FaDev className="w-4 h-4" /></Link>
                </li>
                <li className="hover:bg-cyan-200 p-1 rounded-lg transition-all cursor-pointer" >
                    <Link target="_blank" to='https://twitter.com/LipuShamiul'><FaTwitter className="w-4 h-4" /></Link>
                </li>
            </ul>
        </>
    );
};
// 
export default Socials;