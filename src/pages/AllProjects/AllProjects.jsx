import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Container from "../../component/Container/Container";
import { projetsList } from "../Home/Projects/ProjectsList";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaGithubSquare } from "react-icons/fa";

const AllProjects = () => {
    return (
        <section className="py-5">
            <Container>
                <div className="py-10">
                    <div className="text-center py-5">
                        <h1 className="font-bold text-textPrimary text-3xl text-center">Recent Projects</h1>
                        <p className="text-textSecondary ">Here are some of my projects</p>
                    </div>
                    <div className="grid grid-cols-1 gap-4 ">
                        {
                            projetsList.map(project => <div key={project.name} className="hero min-h-full bg-primary">
                                <div className="hero-content flex-col lg:flex-row">
                                    <Carousel
                                        showArrows={true}
                                        autoPlay={true}
                                        infiniteLoop={true}
                                        showThumbs={false}
                                    >
                                        {
                                            project.imageUrl.map((imageUrl, index) => (<img key={index} src={`${imageUrl}`} alt="image" className="max-w-sm rounded-lg shadow-2xl" />))
                                        }
                                    </Carousel>
                                    <div className="text-textSecondary">
                                        <h1 className="text-4xl font-bold text-textPrimary">{project.name}</h1>
                                        <ul className="flex flex-wrap justify-start gap-2 pt-4">
                                            {
                                                project.techs.map((tech, index) => <li className="px-4 font-semibold text-sm py-2 bg-[#122b39] text-[#59deca] rounded-full" key={index}>{tech}</li>)
                                            }
                                        </ul>
                                        <p className="py-6">{project.description}</p>
                                        <div className="flex gap-4 text-primary">
                                            <Link target="_blank" to={`${project.githubLink}`} className="flex items-center  justify-center gap-2  px-4 py-2 bg-gradient-to-b from-teal-400 to-teal-800 rounded-xl hover:bg-gradient-to-t hover:from-teal-800 hover:to-teal-800 transition-all"><FaGithubSquare /> Github</Link>
                                            <Link target="_blank" to={`${project.liveLink}`} className="flex gap-2 px-4 py-2 bg-gradient-to-b from-teal-400 to-teal-800 rounded-xl hover:bg-gradient-to-t hover:from-teal-800 hover:to-teal-800 transition-all">Live demo <FaExternalLinkAlt className="w-3" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>

            </Container>
        </section>
    );
};

export default AllProjects;