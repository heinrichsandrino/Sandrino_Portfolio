import React from "react";
import TitleHeader from "../components/TitleHeader";

const AboutSection = () => {
    return (
        <section id="about" className="pt-6 padding-x-lg pb-16">
            <div className="space-y-16">
                <TitleHeader
                    title="Get to Know Me"
                    sub="👨‍💻 About Me"
                />

                <div className="grid-2-cols items-center gap-10">
                    {/* Image Section */}
                    <div className="card-border rounded-xl overflow-hidden max-w-md mx-auto shadow-lg">
                        <img
                            src={import.meta.env.BASE_URL + "images/Heinrich.jpg"}
                            alt="Heinrich Sandrino"
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="space-y-6">
                        <p className="text-white-50 text-base md:text-lg leading-relaxed">
                            I’m <span className="text-white font-semibold">Heinrich C. Sandrino</span>, a Software/Web Developer specializing in back-end development and data-driven solutions. As a Computer Science graduate from Bicol University, I’ve built and contributed to real-world projects that focus on logic, data processing, and system architecture using tools like Supabase, Python, TypeScript, Dart, and Java.
                        </p>
                        <p className="text-white-50 text-base md:text-lg leading-relaxed">
                            Through work experiences and internships with the Commission on Elections, DOLE, Fornix Corporation, and Quanby Solutions, I’ve gained practical experience in building back-end systems, managing databases, writing scalable code, and supporting IT infrastructures. My work includes ERP data migration scripts, HR platform development, and mobile app logic for route optimization and AI-based recommendations.
                        </p>
                        <p className="text-white-50 text-base md:text-lg leading-relaxed">
                            With a strong foundation in algorithms and problem-solving, I thrive in roles that require critical thinking, clean code, and functional design. I’m now seeking opportunities to grow as a back-end or system-focused developer and contribute to impactful, data-centered projects.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
