import { techList } from "./TechList";
import Marquee from "react-fast-marquee";

import { Slide } from "react-awesome-reveal";

const Techs = () => {
  return (
    <section className="bg-gradient-to-t from-primary from-10% via-sky-900 via-40% to-primary to-90%">
      {/* <Container> */}
      <Marquee
        speed={80}
        gradientColor={[15, 23, 42]}
        gradient={true}
        gradientWidth={160}
        pauseOnClick={true}
      >
        <Slide direction="right" triggerOnce="true" duration={1000}>
          <div className=" py-10 flex flex-row items-center justify-between overflow-x-auto">
            {techList.map((tech, index) => {
              return (
                <div
                  key={index}
                  className={`text-center font-semibold  text-white px-6 lg:px-12 py-10`}
                >
                  <img
                    className="w-8 mx-auto"
                    src={tech.icon}
                    alt={tech.name}
                  />
                  <p className="">{tech.name}</p>
                </div>
              );
            })}
          </div>
        </Slide>
      </Marquee>
    </section>
  );
};

export default Techs;
