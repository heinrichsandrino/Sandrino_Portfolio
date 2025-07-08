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
        imgPath: "/images/logos/company-1.png",
    },
    {
        imgPath: "/images/logos/company-2.png",
    },
    {
        imgPath: "/images/logos/company-3.png",
    },
    {
        imgPath: "/images/logos/company-4.png",
    },
    {
        imgPath: "/images/logos/company-1.png",
    },
    {
        imgPath: "/images/logos/company-2.png",
    },
    {
        imgPath: "/images/logos/company-3.png",
    },
    {
        imgPath: "/images/logos/company-4.png",
    },
    {
        imgPath: "/images/logos/company-1.png",
    },
    {
        imgPath: "/images/logos/company-2.png",
    },
    {
        imgPath: "/images/logos/company-3.png",
    },
    {
        imgPath: "/images/logos/company-4.png",
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
        name: "Java Developer",
        modelPath: `${import.meta.env.BASE_URL}models/java-transformed.glb`, // <- rename to avoid ".js" confusion
        scale: 1.2,
        rotation: [0, 0, 0],
    },
    {
        name: "Flutter Developer",
        modelPath: `${import.meta.env.BASE_URL}models/flutter.glb`,
        scale: 30,
        rotation: [0, 0, 0],
    },
];

const expCards = [
    {
        review: "Heinrich provided technical expertise and ensured the reliability of election-related systems. His dedication contributed greatly to the success of the 2025 national and local elections.",
        imgPath: "/images/comelec.png",
        logoPath: "/images/comelec-icon.png",
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
        imgPath: "/images/quanby.png",
        logoPath: "/images/quanby-icon.png",
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
        imgPath: "/images/dole.png",
        logoPath: "/images/dole-icon.png",
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
        imgPath: "/images/fornix.png",
        logoPath: "/images/fornix-icon.png",
        title: "Back-End Support Staff",
        date: "January 2024 – July 2024",
        responsibilities: [
            "Developed internal codes for data migration within the Odoo ERP system.",
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
        name: "Ma Katrina Sacueza",
        mentions: "Connect on LinkedIn",
        link: "https://www.linkedin.com/in/ma-katrina-sacueza-4329981b8/",
        review:
            "Heinrich was part of our Odoo project team at Fornix Corporation, and he proved to be a reliable and effective team member. He communicated well, delivered his tasks accurately, " +
            "and often demonstrated strong analytical thinking when solving issues. His ability to work independently while staying aligned with project goals made a real difference in our progress.",
        imgPath: "/images/atekat.png",
    },
    {
        name: "Joemar Cardiño",
        mentions: "Connect on LinkedIn",
        link: "https://www.linkedin.com/in/joemar25/",
        review:
            "Heinrich was part of a project I led at Quanby Solutions Inc., and it was clear from the start that he was eager to learn and grow. He consistently showed initiative, asked the right questions, and delivered quality work. It was great to mentor someone so driven and receptive. He'll be a valuable asset to any development team.",
        imgPath: "/images/kuyamar.png",
    },
    {
        name: "Angela Sheriza Tino",
        mentions: "Connect on LinkedIn",
        link: "https://www.linkedin.com/in/anj-tino/",
        review:
            "Heinrich is incredibly dependable, collaborative, and always brings a strong sense of professionalism to any task. Working with him has been a great experience—he communicates effectively, meets deadlines without fail, and consistently goes above and beyond to support the team. Heinrich is not only skilled at what he does, but also someone you can truly count on. Any team would be lucky to have him.",
        imgPath: "/images/sheshe.png",
    },
    /*{
        name: "Marvin McKinney",
        mentions: "@marvinmckinney",
        review:
            "Heinrich was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Floyd Miles",
        mentions: "@floydmiles",
        review:
            "Heinrich’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
        imgPath: "/images/client4.png",
    },
    {
        name: "Albert Flores",
        mentions: "@albertflores",
        review:
            "Heinrich was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in backend dev are top-notch.",
        imgPath: "/images/client6.png",
    },*/
];

const socialImgs = [
    {
        name: "github",
        imgPath: "/images/github.png",
        link: "https://github.com/heinrichsandrino",
    },
    {
        name: "fb",
        imgPath: "/images/fb.png",
        link: "https://www.facebook.com/heinrich.sandrino.3",
    },
    {
        name: "linkedin",
        imgPath: "/images/linkedin.png",
        link: "https://www.linkedin.com/in/hcsandrino/",
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