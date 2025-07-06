import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
            <div className="inner flex items-center justify-between">

                {/* Logo with profile image */}
                <a href="#hero" className="logo flex items-center gap-4">
                    <img
                        src={import.meta.env.BASE_URL + "images/profile.jpg"}
                        alt="profile"
                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-lg"
                    />
                    <span>Heinrich Sandrino</span>
                </a>

                {/* Navigation Links */}
                <nav className="desktop">
                    <ul className="flex gap-6">
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Contact Button */}
                <a href="#contact" className="contact-btn group">
                    <div className="inner">
                        <span>Contact me</span>
                    </div>
                </a>
            </div>
        </header>
    );
};

export default NavBar;
