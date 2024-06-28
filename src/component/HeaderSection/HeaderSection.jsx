import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Modal from "../Modal/Modal";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF"];

const HeaderSection = () => {
  const [isModalOpenForResume, setIsModalOpenForResume] = useState(false);
  const [isModalOpenForCV, setIsModalOpenForCV] = useState(false);
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  // const backgroundNavImage = useMotionTemplate`radial-gradient(ellipse 150% 100% at 50% 50%,#020617   25%, ${color} )`;
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617  25%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <>
      {isModalOpenForResume && (
        <Modal
          setIsModalOpen={setIsModalOpenForResume}
          resume={true}
          downloadLink={
            "https://drive.google.com/uc?export=download&id=10OJETmCe3nzxS4FobjrN24eAOyIC_b9z"
          }
          tabLink={
            "https://drive.google.com/file/d/10OJETmCe3nzxS4FobjrN24eAOyIC_b9z/view?usp=sharing"
          }
        />
      )}
      {isModalOpenForCV && (
        <Modal
          setIsModalOpen={setIsModalOpenForCV}
          resume={false}
          downloadLink={
            "https://drive.google.com/uc?export=download&id=1eHy7ssCmuOcMnbM4Sv9H2sDrBj11mKxo"
          }
          tabLink={
            "https://drive.google.com/file/d/1eHy7ssCmuOcMnbM4Sv9H2sDrBj11mKxo/view?usp=sharing"
          }
        />
      )}
      <motion.section
        style={{
          backgroundImage,
        }}
      >
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

        <Navbar />
        <motion.section
          style={{
            backgroundImage,
          }}
          className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 text-gray-200 "
        >
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="animate-heading max-w-xl text-center text-3xl font-bold leading-tight sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
              Hello, I{"'"}m Shamiul Islam <br />
            </h1>
            <p className="my-6 max-w-xl text-center text-xl font-light leading-relaxed md:text-lg md:leading-relaxed">
              Aspiring Full Stack Developer
              <br />{" "}
              <span className="font-bold">
                Welcome to My Full Stack Journey
              </span>
            </p>
            <div className="flex gap-2">
              <Link>
                <motion.button
                  onClick={() => setIsModalOpenForResume(true)}
                  style={{
                    border,
                    boxShadow,
                  }}
                  whileHover={{
                    scale: 1.015,
                  }}
                  whileTap={{
                    scale: 0.985,
                  }}
                  className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 font-semibold text-gray-50 transition-colors hover:bg-gray-950/50"
                >
                  {" "}
                  Resume
                  <FaArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
                </motion.button>
              </Link>
              <Link>
                <motion.button
                  onClick={() => setIsModalOpenForCV(true)}
                  style={{
                    border,
                    boxShadow,
                  }}
                  whileHover={{
                    scale: 1.015,
                  }}
                  whileTap={{
                    scale: 0.985,
                  }}
                  className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
                >
                  {" "}
                  CV
                  <FaArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
                </motion.button>
              </Link>
            </div>
          </div>
          {/* <div className="absolute inset-0 z-0 "></div> */}
        </motion.section>
      </motion.section>
    </>
  );
};

export default HeaderSection;
