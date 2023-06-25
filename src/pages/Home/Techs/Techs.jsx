import { techList } from "./TechList";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const animation = { duration: 20000, easing: (t) => t }
const Techs = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        duration: 20000,
        spacing: 15,
        slides: {
            perView: 5,
        },
        created(s) {
            s.moveToIdx(16, true, animation)
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 16, true, animation)
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 16, true, animation)
        },
    }
    )


    return (
        <section className="bg-gradient-to-t from-primary from-10% via-sky-900 via-30% to-primary to-90%">
            {/* <Container> */}
            <div ref={sliderRef} className="keen-slider py-10 flex flex-row items-center justify-between overflow-x-auto">
                {
                    techList.map((tech, index) => {
                        return (
                            <div key={index} className={`keen-slider__slide number-slide${index + 1} text-center font-semibold  text-white`}>
                                <img className="w-8 mx-auto" src={tech.icon} alt={tech.name} />
                                <p className="">{tech.name}</p>
                            </div>
                        )
                    })
                }
            </div>
            {/* <div className="py-10 flex flex-row items-center justify-between overflow-x-auto ">
                    {
                        // techList.map((tech, index) => {
                        //     return (
                        //         <div key={index} className=" text-center bg-slate-500 text-white mx-1 ">
                        //             <img className="w-8 mx-auto" src={tech.icon} alt={tech.name} />
                        //             <p className="">{tech.name}</p>
                        //         </div>
                        //     )
                        // })
                    }
                </div> */}
            {/* </Container> */}
        </section>
    );
};

export default Techs;