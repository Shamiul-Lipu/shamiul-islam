import { Link } from "react-router-dom";
import Container from "../../../component/Container/Container";
import { projetsList } from "./ProjectsList";
import { FaGithubSquare, FaExternalLinkAlt } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Fade, Slide } from "react-awesome-reveal";

const Projects = () => {
    return (
        <section className="bg-primary py-10">
            <Container>
                <div>
                    <h3 className="font-bold text-textPrimary text-3xl text-center pb-10">Projects</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-5 px-2">
                    {
                        projetsList.map((project, index) => <div key={index} className="card w-full bg-[#121c33] hover:bg-[#1a243d]   text-textSecondary shadow-xl hover:-translate-y-4 transition-all ease-in-out hover:shadow-2xl hover:shadow-cyan-900">
                            <figure className="rounded-xl mx-10 mt-10">
                                <Carousel
                                    showArrows={true}
                                    autoPlay={true}
                                    infiniteLoop={true}
                                    showThumbs={false}
                                >
                                    {
                                        project.imageUrl.map((imageUrl, index) => (<img key={index} src={`${imageUrl}`} alt="image" className="rounded-xl" />))
                                    }
                                </Carousel>
                            </figure>
                            <div className="flex flex-wrap gap-2 justify-center px-10 pt-5 text-white  font-semibold">
                                <Link target="_blank" to={`${project.githubLink}`} className="flex items-center  justify-center gap-2  px-4 py-2 bg-gradient-to-b from-[#1a243d] to-sky-900 rounded-xl border-b-2 border-b-primary hover:underline hover:border-b-2 hover:text-sky-200 hover:border-blue-400 transition-all"><FaGithubSquare /> Github</Link>
                                <Link target="_blank" to={`${project.liveLink}`} className="flex gap-2 px-4 py-2 bg-gradient-to-b from-[#1a243d] to-sky-900 rounded-xl border-b-2 border-b-primary hover:underline hover:border-b-2 hover:text-sky-200 hover:border-blue-400 transition-all">Live demo <FaExternalLinkAlt className="w-3" /></Link>
                            </div>
                            <div className="card-body items-center text-center py-3">
                                <h2 className="card-title text-textPrimary">{project.name}</h2>
                                <Fade cascade duration={500}>
                                    <ul className="flex flex-wrap justify-center gap-2 ">
                                        {
                                            project.techs.map((tech, index) => <li className="px-4 font-semibold text-sm py-2 bg-[#122b39] text-[#59deca] rounded-full" key={index}>{tech}</li>)
                                        }
                                    </ul>
                                </Fade>
                            </div>
                            <div className="px-10 pb-8">
                                <Fade duration={3000}>
                                    <p>{project.description}</p>
                                </Fade>
                            </div>
                        </div>)
                    }
                </div>
                <div className="flex  justify-center my-2">
                    <Link to="/projects" className="btn-primary">View more of my projects</Link>
                </div>
            </Container>
        </section>
    );
};

export default Projects;