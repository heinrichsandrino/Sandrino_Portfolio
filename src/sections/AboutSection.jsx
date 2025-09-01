import React from "react";
import TitleHeader from "../components/TitleHeader";

const AboutSection = () => {
    return (
        <section id= "about" className="relative overflow-hidden bg-black text-white py-20 px-6 md:px-16 lg:px-24">
            <div className="absolute top-10 right-5 z-0 pointer-events-none">
                <img
                    src={import.meta.env.BASE_URL + "/images/bg.png"}
                    alt="background"
                    className="w-[400px] h-auto object-contain"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto space-y-16">
                <TitleHeader
                    title="Get to Know Me"
                    sub="👨‍💻 About Me"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
                    {/* Image Section */}
                    <div className="card-border rounded-xl overflow-hidden w-full max-w-[500px] mx-auto shadow-lg">
                        <img
                            src={`${import.meta.env.BASE_URL}images/Heinrich.jpg`}
                            alt="Heinrich Sandrino"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="space-y-6 text-white-50 text-base md:text-lg leading-relaxed">
                        <p>
                            I’m <span className="text-white font-semibold">Heinrich C. Sandrino</span>, a Computer Science graduate (Cum Laude, DOST Scholar) with a passion for building reliable software and ensuring its quality. I have a strong foundation in Java, Python, TypeScript, Dart, and Supabase, and have applied these skills through both academic projects and professional development work.
                        </p>
                        <p>
                            Through my academic projects and development work at Quanby Solutions, I gained practical experience in back-end development, database management, and building functional systems. These experiences strengthened my skills in debugging, problem-solving, and writing clean, efficient code that supports reliable applications.
                        </p>
                        <p>
                            I am now focused on pursuing a career in Software Testing and Quality Assurance, where I can combine my developer’s perspective with a tester’s eye for detail. My goal is to contribute to creating systems that are not only functional but also stable, efficient, and user-ready, while continuously growing my expertise as a QA professional.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
