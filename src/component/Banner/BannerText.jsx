import { TypeAnimation } from "react-type-animation";
import { FaHandshake, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
const BannerText = () => {
  const handleScrollToContact = (event) => {
    event.preventDefault();
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="to-top" className="text-center py-20 px-2">
      <h1 className="animate-heading">
        Hello, I{"'"}m
        <span className="font-extrabold">
          {" "}
          Shamiul Islam <br />
        </span>
        <TypeAnimation
          sequence={[
            "Junior Full Stack",
            500,
            "Front-end",
            500,
            "Junior MERN",
            500,
            "ReactJS",
            500,
          ]}
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
      <div className="flex flex-col sm:flex-row justify-center gap-5">
        <Link
          to="/#contact"
          onClick={handleScrollToContact}
          className="btn-secondary flex items-center gap-2 justify-center"
        >
          Contact me <FaHandshake />
        </Link>
        <Link
          target="_blank"
          to="https://drive.google.com/drive/folders/1l7suRmmzdduuCdA9KuFf1rbcIrMn6bEW?usp=sharing"
          className="btn-primary flex items-center gap-2 justify-center"
        >
          {" "}
          Resume <FaLink />
        </Link>
      </div>
    </div>
  );
};

export default BannerText;
