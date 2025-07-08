import { useRef } from "react";

const GlowCard = ({ card, index, children }) => {
    const cardRefs = useRef([]);

    const handleMouseMove = (index) => (e) => {
        const card = cardRefs.current[index];
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
        angle = (angle + 360) % 360;

        card.style.setProperty("--start", angle + 60);
    };

    return (
        <div
            ref={(el) => (cardRefs.current[index] = el)}
            onMouseMove={handleMouseMove(index)}
            className="relative card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column" // ✅ added 'relative'
        >
            <div className="glow absolute inset-0 z-0 pointer-events-none" /> {/* ✅ updated glow layer */}

            <div className="relative z-10"> {/* ✅ wrap actual content in a z-10 container */}
                <div className="flex items-center gap-1 mb-5">
                    {Array.from({ length: 5 }, (_, i) => (
                        <img
                            key={i}
                            src={`${import.meta.env.BASE_URL}images/star.png`}
                            alt="star"
                            className="size-5"
                        />
                    ))}
                </div>

                <div className="mb-5">
                    <p className="text-white-50 text-lg">{card.review}</p>
                </div>

                {children}
            </div>
        </div>
    );
};

export default GlowCard;
