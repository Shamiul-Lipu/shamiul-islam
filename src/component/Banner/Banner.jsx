import BannerText from "./BannerText";

const Banner = () => {
    return (
        <div className="h-[40rem] bg-primary flex justify-around items-center">
            <div className="absolute">
                <img className="w-8 relative top-72 left-80 md:block hidden" alt="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
                <img className="w-10 relative -top-40 left-80 md:block hidden " alt="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />

                <img className="w-8 relative -top-60 left-44 hidden md:block" alt="TypeScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" />
                <img className="w-8 relative -top-50 left-96 md:block hidden" alt="Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
            </div>


            <BannerText></BannerText>

            <div className="absolute">
                <img className="w-8 relative -top-44 right-96" alt="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
                <img className="w-8 relative -top-60 right-44 hidden md:block" alt="TypeScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" />
                <img className="w-8 relative top-44 right-96" alt="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
                <img className="w-8 relative -top-10 right-[430px]" alt="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
            </div>
        </div>
    );
};

export default Banner;