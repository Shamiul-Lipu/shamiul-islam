import { Link } from "react-router-dom";
import resumeSvg from "../../assets/resumeS.svg";
import cvSvg from "../../assets/cvS.svg";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";

const modalVariants = {
  hidden: { opacity: 0.6, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: [0.7, 0.8, 0.9, 1],
    transition: { duration: 0.3 },
  },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const Modal = ({ setIsModalOpen, resume, downloadLink, tabLink }) => {
  return (
    <motion.div
      className="relative z-20"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div
        className="fixed inset-0 bg-gray-900 bg-opacity-80 transition-opacity"
        aria-hidden="true"
        variants={backdropVariants}
      ></motion.div>

      <motion.div className="fixed inset-0 z-20 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <motion.div
            className="relative transform overflow-hidden rounded-lg bg-[#0f172a] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="bg-[#243763] px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="relative">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-white flex justify-center items-center absolute top-0 right-0 bg-red-200 w-6 h-6 rounded-full"
                >
                  <RxCross2 className="text-black" />
                </button>
              </div>
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-[#7ef4e2]">
                  <img src={resume ? resumeSvg : cvSvg} alt="resume/cv svg" />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    className="text-base font-extralight leading-6 text-gray-200"
                    id="modal-title"
                  >
                    {resume ? "Resume" : "CV"} Options
                  </h3>
                  <div className="mt-2">
                    <p className="text-base text-[#cdfff8] ">
                      Please choose how you would like to view the{" "}
                      <span className="font-semibold">
                        {resume ? "resume" : "CV"}
                      </span>
                      :
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#243763]  px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <Link
                to={downloadLink}
                className="inline-flex w-full justify-center rounded-md bg-[#59deca] px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-[#7ef4e2] sm:ml-3 sm:w-auto"
              >
                Download PDF
              </Link>
              <Link
                target="_blank"
                to={tabLink}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-[#38bdf8] px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm  hover:bg-[#7ed8ff] sm:mt-0 sm:w-auto"
              >
                Open in Tab
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
