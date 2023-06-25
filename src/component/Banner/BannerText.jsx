import { TypeAnimation } from "react-type-animation";

const BannerText = () => {
    return (
        <div className="text-center py-20 px-2">
            <h1 className="animate-heading">Hello, I{'\''}m
                <span className="font-extrabold"> Shamiul Islam <br /></span>
                <TypeAnimation
                    sequence={['Junior Full Stack', 'Front-end', 500, 'ReactJS', 500]}
                    preRenderFirstString={true}
                    deletionSpeed={99}
                    repeat={Infinity}
                />
                <br className="block md:hidden" />
                <span>Developer</span>
            </h1>
            <p className="max-w-lg mx-auto py-6 font-semibold text-lg md:text-xl text-textPrimary">
                Welcome to My Full Stack Journey

            </p>
            <button className="btn-primary">Download CV</button>
        </div>
    );
};

export default BannerText;