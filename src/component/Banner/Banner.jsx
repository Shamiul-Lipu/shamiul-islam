import BannerText from "./BannerText";

const Banner = () => {
    return (
        <div className="h-[40rem] bg-[#0f172a] flex justify-around items-center">
            <div className="absolute">
                <img className="w-8 relative -top-44 left-96" alt="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />

                <img className="w-8" alt="TypeScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" />
                <img className="w-8" alt="Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
            </div>

            <BannerText></BannerText>

            <div className="absolute">
                <img className="w-8" alt="HTML" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />
                <img className="w-8" alt="CSS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" />
            </div>
        </div>
    );
};

export default Banner;