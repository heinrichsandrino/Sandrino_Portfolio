import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
    return (
        <section id="testimonials" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="What People Say About Me?"
                    sub="⭐️ Feedback from Past Workmates"
                />

                <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
                    {testimonials.map((testimonial, index) => (
                        <GlowCard card={testimonial} key={index} index={index}>
                            <div className="flex items-center gap-3">
                                <div>
                                    <img
                                        src={`${import.meta.env.BASE_URL}${testimonial.imgPath}`}
                                        alt={`${testimonial.name}'s picture`}
                                    />
                                </div>
                                <div>
                                    <p className="font-bold">{testimonial.name}</p>
                                        <a
                                        href={testimonial.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white-50 hover:underline"
                                        >
                                            {testimonial.mentions}
                                        </a>
                                </div>
                            </div>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;