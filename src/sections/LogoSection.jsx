import { logoIconsList } from "../constants/index.js";

const LogoIcon = ({ icon }) => {
    const fullPath = `${import.meta.env.BASE_URL}${icon.imgPath.replace(/^\//, '')}`;

    return (
        <div className="flex-none flex-center marquee-item">
            <img src={fullPath} alt={icon.name || "logo"} />
        </div>
    );
};

const LogoShowcase = () => (
    <div className="md:my-20 my-10 relative">
        <div className="gradient-edge" />
        <div className="gradient-edge" />

        <div className="marquee h-52">
            <div className="marquee-box md:gap-12 gap-5">
                {logoIconsList.map((icon, index) => (
                    <LogoIcon key={index} icon={icon} />
                ))}

                {logoIconsList.map((icon, index) => (
                    <LogoIcon key={index} icon={icon} />
                ))}
            </div>
        </div>
    </div>
);

export default LogoShowcase;