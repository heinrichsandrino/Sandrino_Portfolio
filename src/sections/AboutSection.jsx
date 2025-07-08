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
                            I’m <span className="text-white font-semibold">Heinrich C. Sandrino</span>, a Software/Web Developer specializing with a strong focus on back-end development. As a Computer Science graduate from Bicol University, I’ve built and contributed to real-world projects that focus on logic, data processing, and system architecture using tools like Supabase, Python, TypeScript, Dart, and Java.
                        </p>
                        <p>
                            Through work experiences and internships with the Commission on Elections, DOLE, Fornix Corporation, and Quanby Solutions, I’ve gained practical experience in building back-end systems, managing databases, writing scalable code, and supporting IT infrastructures. My work includes backend development for HR platforms, mobile app logic for route optimization, and AI-based recommendation systems.
                        </p>
                        <p>
                            With a strong foundation in algorithms and problem-solving, I thrive in roles that require critical thinking, clean code, and functional design. I’m now seeking opportunities to grow as a back-end or system-focused developer and contribute to impactful projects.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
