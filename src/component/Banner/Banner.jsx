import BannerText from "./BannerText";

const Banner = () => {
    return (
        <div className="h-[40rem] bg-primary flex justify-around items-center">
            <div className="absolute">
                <img className="w-8 relative top-72 left-80 md:block hidden" alt="JavaScript" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png?size=48" />
                <img className="w-10 relative -top-40 left-80 md:block hidden " alt="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
                <img className="w-8 relative -top-60 left-44 hidden md:block" alt="TypeScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" />
                <img className="w-8 relative -top-50 left-72 md:block hidden" alt="Git" src="https://avatars.githubusercontent.com/u/45120?s=40&v=4" />
                <img className="w-8 relative -top-50 left-96 lg:block hidden" alt="Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
            </div>


            <BannerText></BannerText>

            <div className="absolute">
                <img className="w-8 relative -top-44 right-96 md:block hidden" alt="JavaScript" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/npm/npm.png?size=48" />
                <img className="w-8 relative -top-60 right-44 hidden md:block" alt="TypeScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
                <img className="w-8 relative top-44 right-96 md:block hidden" alt="JavaScript" src="https://avatars.githubusercontent.com/u/32372333?s=40&v=4" />
                <img className="w-8 relative -top-10 right-[430px] md:block hidden" alt="JavaScript" src="https://avatars.githubusercontent.com/u/856813?s=40&v=4" />
                <img className="w-8 relative -top-10 right-[330px] md:block hidden" alt="react" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png?size=48" />
            </div>
        </div>
    );
};

export default Banner;