import React, {useRef} from 'react'
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(()=>{
        gsap.fromTo(sectionRef.current,
            {opacity: 0},
            {opacity: 1, duration: 1.5}
        )
    },[]);
    return (
        <section id = "work" ref = {sectionRef} className="app-showcse">
            <div className="w-full">
                <div className="showcaselayout">
                    {/*LEFT*/}
                    <div className = "first-project-wrapper" ref={project1Ref}>
                        <div>
                            <img src = {import.meta.env.BASE_URL + "images/project1.png"} alt= "Ryde"/>
                        </div>
                        <div className = "text-content">
                            <h2>On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde</h2>
                            <p>
                                asfadfdsg fgdfgdfgdfg fdgdfgdfgdfg frtyghf jghjtygfh ghfghfhgfhf ghfth
                            </p>
                        </div>
                    </div>
                    {/*RIGHT*/}
                    <div className = "project-list-wrapper overflow-hidden">
                        <div className = "project" ref={project2Ref}>
                            <div className = "image-wrapper bg-[#ffefdb]">
                                <img src = {import.meta.env.BASE_URL + "images/project2.png"} alt= "Library Management Platform"/>
                            </div>
                            <h2>Library Management Platform</h2>
                        </div>

                        <div className = "project" ref={project3Ref}>
                            <div className = "image-wrapper bg-[#ffe7db]">
                                <img src = {import.meta.env.BASE_URL + "images/project3.png"} alt= "YC Directory"/>
                            </div>
                            <h2>YC Directory</h2>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default ShowcaseSection
