

const BannerText = () => {
    return (
        <div className="text-center py-20 bg-slate-400">
            <h1 className="animate-heading">Hello, I{'\''}m
                <span className="font-extrabold"> Shamiul Islam <br /></span>
                <span>Junior Full Stack Developer</span>
            </h1>
            <p className="text-gray-600 max-w-lg mx-auto">
                <span>Transforming Ideas into Reality <br /></span>
                I am a full stack developer with a passion for building web applications. I have experience in front-end development, back-end development, and full stack development.
            </p>
            <button className="px-4 py-2 bg-lime-500 mt-3">Download CV</button>
        </div>
    );
};

export default BannerText;