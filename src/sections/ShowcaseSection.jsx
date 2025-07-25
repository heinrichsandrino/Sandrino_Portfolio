import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
    const sectionRef = useRef(null);
    const rydeRef = useRef(null);
    const libraryRef = useRef(null);
    const ycDirectoryRef = useRef(null);
    const [showVideo, setShowVideo] = useState(false); // ✅ toggle state

    useGSAP(() => {
        // Animation for the main section
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        // Animations for each app showcase
        const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    },
                }
            );
        });
    }, []);

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    <div ref={rydeRef} className="first-project-wrapper">
                        <div className="image-wrapper relative">
                            {showVideo ? (
                                <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden">
                                    <iframe
                                        src="https://www.youtube.com/embed/HKVTyBwZZ8Q"
                                        title="YouTube video player"
                                        className="absolute top-0 left-0 w-full h-full"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            ) : (
                                <img
                                    src={import.meta.env.BASE_URL + "images/project1.png"}
                                    alt="LAKAW App"
                                    className="w-full rounded-xl"
                                />
                            )}
                            <button
                                onClick={() => setShowVideo(!showVideo)}
                                className="absolute bottom-2 right-2 bg-white/90 text-black px-4 py-1 rounded-md text-sm shadow-md hover:bg-white transition"
                            >
                                {showVideo ? "Back to Image" : "Watch Demo"}
                            </button>
                        </div>
                        <div className="text-content mt-4">
                            <h2>
                                Travel Planning with LAKAW — Your Smart Itinerary Companion for Albay
                            </h2>
                            <p className="text-white-50 md:text-xl">
                                A mobile app built with FlutterFlow, Supabase, and custom algorithms for optimized routes
                                and personalized tourist itineraries.
                            </p>
                        </div>
                    </div>

                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={libraryRef}>
                            <div className="image-wrapper bg-[#FFEFDB]">
                                <img
                                    src= {import.meta.env.BASE_URL +"images/project2.png"}
                                    alt="aiBites App"
                                />
                            </div>
                            <h2>
                                <a
                                    href="https://github.com/heinrichsandrino/aiBITES"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-blue-300 transition"
                                >
                                    aiBites - AI Recipe Recommendation App
                                </a>
                            </h2>
                        </div>

                        <div className="project" ref={ycDirectoryRef}>
                            <div className="image-wrapper bg-[#b2d8d8]">
                                <img src={import.meta.env.BASE_URL +"images/project3.png"} alt="employee-management" />
                            </div>
                            <h2>
                                <a
                                    href="https://github.com/heinrichsandrino/employee-management"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-blue-300 transition"
                                >
                                    Employee Management System with Spring Boot and REST API
                                </a>
                            </h2>
                        </div>
                    </div>

                </div>
                <div className="w-full mt-12">
                    <a
                        href="https://github.com/heinrichsandrino"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition"
                    >
                        See more of my projects on GitHub →
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AppShowcase;