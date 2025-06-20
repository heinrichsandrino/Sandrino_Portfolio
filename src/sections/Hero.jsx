import {words} from '../constants/index.js'
import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";
const Hero = () => {
    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src= "/images/bg.png" alt="background"/>
            </div>
            <div className="hero-layout">
                {/* LEFT HERO CONTENT*/}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>Shaping
                                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                        <span
                            key={index}
                            className="flex items-center md:gap-3 gap-1 pb-2"
                        >
                        <img
                            src={word.imgPath}
                            alt="person"
                            className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
                            </h1>
                            <h1>Into Real Projects</h1>
                            <h1>That Deliver Results</h1>
                        </div>
                        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                            Hi, I’m Heinrich, a developer based in the Philippines with a passion for
                            code.
                        </p>
                        <Button
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="button"
                            text="See my work"
                        />
                    </div>
                </header>
                {/* RIGHT HERO CONTENT*/}
                <figure>
                    <div className="hero-3d-layout">
                        <HeroExperience />
                    </div>
                </figure>
            </div>
        </section>
    )
}
export default Hero
