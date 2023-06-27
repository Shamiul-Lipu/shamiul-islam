import Container from "../../../component/Container/Container";
import Lottie from "lottie-react";
import contact from '../../../assets/wired-flat-981-consultation.json'
import send from '../../../assets/wired-lineal-177-envelope-mail-send.json'
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { toast } from "react-hot-toast";

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_x2esgt8', 'template_p96yljb', form.current, 'ffTsdQNuCYfK-Dq34')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        form.current.reset();
        toast.success('Message sent successfully!', {
            style: {
                border: '3px solid #0f172a',
                background: '#59deca',
                color: '#0f172a',
            },
        })
    };

    return (
        <Container>
            <section id="contact" className="bg-primary py-5">
                <h3 className="font-bold text-textPrimary text-3xl text-center flex justify-center items-center">Contact Me <Lottie className="rounded-full w-20" animationData={send} /></h3>

                <div className="flex flex-col lg:flex-row gap-5">
                    <div className="flex flex-col items-center order-2 max-w-md justify-center mx-auto">
                        <Lottie className="rounded-full w-40" animationData={contact} />
                        <p className="font-semibold text-justify text-textSecondary px-16 md:px-7 lg:px-0 text-sm ">Thank you for visiting my website. Please take your time to explore the content at your convenience. If you have any inquiries or if there are any collaborative opportunities that interest you, I would be delighted to assist you. Your questions and potential partnerships hold great value to me, and I am here to provide any assistance or information you may require.
                            <br /> <br />
                            <span className="text-textPrimary text-lg">To get in touch with me, kindly utilize the contact form provided. I genuinely appreciate your interest, and I eagerly anticipate hearing from you.</span>
                        </p>
                    </div>
                    <div className="max-w-full md:max-w-xl md:min-w-max mx-auto px-16 md:px-7 lg:px-0 order-1 lg:order-2 flex justify-center items-center">

                        <form ref={form} onSubmit={sendEmail}>
                            <label className="text-textPrimary font-bold mb-2">Name</label>
                            <input type="text" name="from_name" className="input input-bordered w-full px-3 py-2 border rounded-md focus:outline-[#59deca] bg-gray-200 text-gray-900 my-2" required />
                            <label className="text-textPrimary font-bold pb-2">Email</label>
                            <input type="email" name="from_email" className="input input-bordered w-full px-3 py-2 border rounded-md focus:outline-[#59deca] bg-gray-200 text-gray-900 my-2" required />
                            <div className="flex flex-col">
                                <label className="text-textPrimary font-bold pb-2">Message</label>
                                <textarea name="message" className="textarea textarea-success bg-gray-200" required />
                            </div>
                            <input type="submit" value="Send Direct Email" className="btn-secondary my-4 " />
                        </form>
                    </div>
                </div>
            </section>
        </Container>
    );
};

export default ContactMe;