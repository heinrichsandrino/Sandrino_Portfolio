import { socialImgs } from "../constants";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Download CV Button */}
                <div className="flex flex-col justify-center">
                    <a
                        href="assets/SANDRINO-CV.pdf"
                        download="Heinrich_Sandrino-CV.pdf"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 text-center"
                    >
                        Download CV
                    </a>
                </div>

                <div className="socials">
                    {socialImgs.map((socialImg, index) => (
                        <a
                            key={index}
                            href={socialImg.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon"
                        >
                        <div key={index} className="icon">
                            <img
                                src={`${import.meta.env.BASE_URL}${socialImg.imgPath}`}
                                alt="social icon"
                            />
                        </div>
                        </a>
                    ))}
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} Heinrich Sandrino. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
