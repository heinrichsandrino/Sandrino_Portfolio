const navLinks = [
    {
        name: "About",
        link: "#about",
    },
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Testimonials",
        link: "#testimonials",
    },
];

const words = [
    { text: "Ideas", imgPath: "ideas.svg" },
    { text: "Concepts", imgPath: "concepts.svg" },
    { text: "Code", imgPath: "code.svg" },
    { text: "Ideas", imgPath: "ideas.svg" },
    { text: "Concepts", imgPath: "concepts.svg" },
    { text: "Code", imgPath: "code.svg" },
];

const counterItems = [
    { value: 3, suffix: "+", label: "Internship Projects Completed" },
    { value: 5, suffix: "+", label: "Capstone & Research Projects" },
    { value: 6, suffix: "+", label: "Technical Events Attended" },
    { value: 4, suffix: "", label: "Dean’s / President’s List Awards" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Quality Focus",
        desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Reliable Communication",
        desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
        imgPath: "/images/time.png",
        title: "On-Time Delivery",
        desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: `${import.meta.env.BASE_URL}models/react_logo-transformed.glb`,
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python Developer",
        modelPath: `${import.meta.env.BASE_URL}models/python-transformed.glb`,
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: `${import.meta.env.BASE_URL}models/node-transformed.glb`,
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: `${import.meta.env.BASE_URL}models/three.js-transformed.glb`, // <- rename to avoid ".js" confusion
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: `${import.meta.env.BASE_URL}models/git-svg-transformed.glb`,
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review: "Heinrich provided technical expertise and ensured the reliability of election-related systems. His dedication contributed greatly to the success of the 2025 national and local elections.",
        imgPath: "/images/exp1.png",
        logoPath: "/images/logo1.png",
        title: "DESO Technical Support Staff",
        date: "May 2025",
        responsibilities: [
            "Provided technical assistance for Automatic Counting Machines (ACMs).",
            "Handled setup, troubleshooting, and configuration of voting machines.",
            "Coordinated with electoral boards to ensure smooth election operations.",
        ],
    },
    {
        review: "Heinrich played a pivotal role in backend development and version control. His leadership in managing the team’s GitHub repository ensured seamless collaboration and efficient code integration.",
        imgPath: "/images/exp2.png",
        logoPath: "/images/logo2.png",
        title: "Back-End Developer Intern",
        date: "June 2024 – July 2024",
        responsibilities: [
            "Developed backend functionalities for an HR system using Angular Framework and Supabase.",
            "Led the version control process by managing the team's GitHub repository.",
            "Handled pull requests, resolved merge conflicts, and ensured successful integration of all team contributions.",
            "Applied Scrum methodology to track development progress and coordinate tasks.",
        ],
    },
    {
        review: "Heinrich showed initiative in supporting the digitization of records and provided technical support to streamline our barangay operations.",
        imgPath: "/images/exp3.png",
        logoPath: "/images/logo3.png",
        title: "DOLE-GIP Intern",
        date: "April 2024 – July 2024",
        responsibilities: [
            "Digitized barangay records and supported basic IT maintenance.",
            "Encoded documents and formatted official records for system integration.",
            "Performed basic troubleshooting of office devices and software tools.",
        ],
    },
    {
        review: "Heinrich's backend solutions improved our internal workflows. His accuracy and technical proficiency in data migration were essential to our operations.",
        imgPath: "/images/exp1.png",
        logoPath: "/images/logo1.png",
        title: "Back-End Support Staff",
        date: "January 2024 – July 2024",
        responsibilities: [
            "Developed internal tools for data migration within the Odoo ERP system.",
            "Created and tested product codes to ensure smooth data transitions.",
            "Managed and analyzed datasets using spreadsheets for reporting and QA.",
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const testimonials = [
    {
        name: "Esther Howard",
        mentions: "@estherhoward",
        review:
            "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
        imgPath: "/images/client1.png",
    },
    {
        name: "Wade Warren",
        mentions: "@wadewarren",
        review:
            "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
        imgPath: "/images/client3.png",
    },
    {
        name: "Guy Hawkins",
        mentions: "@guyhawkins",
        review:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        imgPath: "/images/client2.png",
    },
    {
        name: "Marvin McKinney",
        mentions: "@marvinmckinney",
        review:
            "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Floyd Miles",
        mentions: "@floydmiles",
        review:
            "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
        imgPath: "/images/client4.png",
    },
    {
        name: "Albert Flores",
        mentions: "@albertflores",
        review:
            "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
        imgPath: "/images/client6.png",
    },
];

const socialImgs = [
    {
        name: "insta",
        imgPath: "/images/insta.png",
    },
    {
        name: "fb",
        imgPath: "/images/fb.png",
    },
    {
        name: "x",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        imgPath: "/images/linkedin.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};