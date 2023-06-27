import bgImage from '../../../assets/layered-waves-haikei.png'
import { Fade, Slide } from "react-awesome-reveal";

const AboutMe = () => {

    const handleScrollToContact = (event) => {
        event.preventDefault();
        const contactSection = document.getElementById('contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className={`bg-cover bg-repeat-y pb-10`} style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="container mx-auto px-5 md:px-10 lg:px-20 bg-[#255b61] border-[1px] transition-all hover:bg-[#2c7077] border-[#c1fcff] rounded-lg -mt-16 opacity-70 text-[#c1fcff]">
                <div className="p-5">
                    <Slide triggerOnce='true'>
                        <h3 className="text-[#c1fcff] text-3xl font-bold text-center py-3">About Me</h3>
                        <Fade triggerOnce='true' delay={500} duration={1000} cascade damping='0.5'>
                            <div className="">

                                <div className="flex justify-center items-start">
                                    <img className="w-5" src="https://user-images.githubusercontent.com/1303154/88677602-1635ba80-d120-11ea-84d8-d263ba5fc3c0.gif" alt="hi"></img>
                                    <h5>Hi there, I'm Shamiul Islam</h5>
                                </div>

                                <div className="justify-stretch">
                                    <p className="mb-4">I am a passionate web developer based in Bangladesh. In recent months , I've been actively learning and involved in various web development projects. My skills include translating design mockups into high-quality code, implementing user authentication and authorization features, troubleshooting and debugging to optimize performance.</p>
                                    <p className="mb-4">My goal is to make a positive impact through innovative web development solutions. I believe in creating user-centric experiences that combine aesthetic design with efficient functionality.</p>
                                    <p className="mb-4">When I'm not working, you can find me exploring the outdoors, experimenting with new recipes in the kitchen, and immersing myself in captivating books. I am constantly seeking new challenges and opportunities to grow both personally and professionally.</p>
                                    <p className="mb-4">Feel free to explore my website and get in touch if you have any questions or would like to collaborate.</p>
                                    <button onClick={handleScrollToContact} href="" className="inline-block bg-primary text-white py-2 px-4 font-medium  duration-300 hover:bg-primary-dark 
                            bg-gradient-to-b from-[#1a243d] to-sky-900 rounded-xl border-b-2 border-b-primary hover:border-b-2 hover:text-sky-200 hover:border-blue-400 transition-all ">Contact Me</button>
                                </div>

                            </div>
                        </Fade>
                    </Slide>
                </div>
            </div>

        </section>
    );
};

export default AboutMe;