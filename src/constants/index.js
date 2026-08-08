import project1 from "../assets/projects/project-1.jpg";
// import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";
import project8 from "../assets/projects/project-8.png";
import project9 from "../assets/projects/project-9.png";

export const HERO_CONTENT = `I'm a results-driven Software Developer with 2.5+ years of experience building scalable, high-performance web applications. Specializing in React.js, Next.js, and Redux Toolkit, I craft seamless, user-centric digital experiences that merge clean code with thoughtful design.

Driven by curiosity and a passion for innovation, I focus on building solutions that boost user engagement and deliver real business impact. I thrive in fast-paced environments where I can push boundaries, solve complex problems, and stay ahead of the ever-evolving front-end landscape.`;

export const ABOUT_TEXT = `I'm a front-end web developer with 2.5+ years of experience specializing in React.js, Next.js, React Native, and Redux Toolkit. I build responsive, user-centric applications with clean, scalable code and efficient state management, turning complex requirements into intuitive, performant interfaces.

I'm passionate about crafting seamless user experiences, solving challenging UI problems, and staying current with the latest front-end trends and best practices. Beyond my core work, I'm actively involved in the developer community — contributing to open-source projects and continuously pushing my own growth as an engineer.`;

export const EXPERIENCES = [
  {
    year: "Oct 2023 - Aug 2025",
    role: "Software Developer",
    company: "TAAB Solutions, Gurugram",
    description: `Designed and developed dynamic, user-centric interfaces using React.js and Next.js, focusing on performance, scalability, and responsive design. Collaborated closely with backend teams to seamlessly integrate RESTful and Node.js APIs. Optimized frontend architecture for speed and efficiency across devices and browsers. Recently expanded into React Native to build high-quality cross-platform mobile applications, emphasizing smooth UI transitions and native performance.`,
    technologies: [
      "HTML",
      "TailwindCSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "React Native",
      "Redux Toolkit",
    ],
    // description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    // technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  // {
  //   year: "Oct 2023 - April 2024",
  //   role: "QA Engineer",
  //   company: "TAAB Solutions, Gurugram",
  //   description: `Performed end-to-end manual testing, including functional, regression, and system testing, ensuring software met quality standards.`,
  //   technologies: ["Jira", "JMeter", "Manual Testing"],
  // },
  {
    year: "Dec 2022 - Sep 2023",
    role: "QA Engineer",
    company: "RV Online Gaming Pvt. Ltd, Gurugram",
    description: `Executed performance tests using JMeter or LoadRunner to identify bottlenecks and improve system scalability.Worked closely with cross-functional teams, including developers and product managers to ensure alignment on requirements and quality standards.`,
    technologies: ["Jira", "JMeter", "Postman", "Manual Testing"],
  },
];

export const PROJECTS = [
  {
    id:1,
    title: "Nex Predictor",
    image: project9,
    description:
      "Developed a real-time sports prediction platform where users can make match predictions, track live updates, and engage in interactive gameplay. The app allows users to create predictions, swap players, and view results dynamically using Redux Toolkit for state management. Designed with mobile first responsive and engaging UI, the platform ensures smooth performance across devices, delivering an intuitive user experience for sports enthusiasts.",
    technologies: ["React.js", "Redux Toolkit", "JavaScript"],
    // githubLink: "https://github.com/abhiket29/ToDo-List",
    liveLink: "https://nex-predictor.gamebadlo.com/",
  },
  {
    id:2,
    title: "TAAB Website",
    image: project5,
    description:
      "Built a fully responsive, cross-browser compatible website using Next.js and Tailwind CSS, ensuring a clean and semantic HTML5 structure to enhance SEO and accessibility. I integrated JavaScript logic to add dynamic interactivity, including modals, sliders, and navigation toggles, resulting in a smooth and engaging user experience.",
    technologies: ["Next.js", "TailwindCSS", "JavaScript"],
    liveLink: "https://taabsolutions.com",
  },
  {
    id:3,
    title: "GameBadlo CRM",
    image: project6,
    description:
      "Developed a modular CRM system using React.js with Redux Toolkit for efficient state and API management. The system included dynamic forms and dashboards for creating and managing competitions, game cards, and advertisements, all integrated using Redux Toolkit's createAsyncThunk for seamless asynchronous operations. Additionally, I implemented role-based routing and protected routes for Admin and User roles to ensure secure and appropriate access to different modules.",
    technologies: ["React.js", "TailwindCSS", "JavaScript", "Redux Toolkit"],
    // githubLink: "https://crm-panel.gamebadlo.com",
    liveLink: "https://crm-panel.gamebadlo.com",
  },
  {
    id:4,
    title: "AI Media Studio",
    image: project8,
    description:
      "Developed an AI-powered media editing platform that allows users to generate, edit, and enhance images with advanced tools. The application includes features such as AI-based image generation, background removal, professional filters, watermarking, and media uploads. Users can create stunning visuals with real-time previews, apply custom effects, and export content in multiple formats. Built with Next.js and TailwindCSS, the platform is fully responsive, performance-optimized, and designed with modern UI/UX principles to provide a seamless creative experience across devices.",
    technologies: ["Next.js", "TailwindCSS", "JavaScript", "API"],
    githubLink: "https://github.com/abhiket29/AI-media-studio",
    liveLink: "https://ai-media-studio49.vercel.app/",
  },
  {
    id:5,
    title: "E-Commerce Website",
    image: project1,
    description:
      "Developed a fully functional e-commerce website that includes key features such as product listing, detailed product pages, a shopping cart with real-time updates, and secure user authentication. The platform allows users to browse products, add items to their cart, and proceed through a streamlined checkout process. The authentication system ensures secure login and registration, enhancing user trust and protecting sensitive data. The application is designed with a responsive layout for optimal performance across all devices, providing a seamless shopping experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/abhiket29/E-commerce",
  },
  {
    id:6,
    title: "Portfolio",
    image: project3,
    description:
      "Developed a personal portfolio website to showcase my projects, technical skills, and contact information in a clean and professional manner. The website is fully responsive and optimized for performance, providing a smooth experience across devices and browsers. It features detailed sections for individual projects with descriptions and live links, an overview of my skill set, and an integrated contact form for easy communication. Designed with modern web technologies, the portfolio reflects my passion for development and serves as a central hub for potential clients, collaborators, and employers to learn more about my work..",
    technologies: ["React.js", "TailwindCSS", "JavaScript"],
    githubLink: "https://github.com/abhiket29/Portfolio",
    liveLink: "https://abhiket49-portfolio.netlify.app",
  },
  {
    id:7,
    title: "Pokémon Website",
    image: project4,
    description:
      "Developed a responsive Pokémon-themed website that showcases detailed information about various Pokémon, creating an engaging and interactive user experience. The application features a search bar and filtering options, allowing users to easily find Pokémon based on name, type, or other attributes. Built with a clean and intuitive UI, the website adapts seamlessly across devices and browsers. This project highlights my ability to work with APIs, manage dynamic data rendering, and create user-friendly interfaces centered around a fun and nostalgic theme.",
    technologies: ["React.js", "CSS", "JavaScript"],
    githubLink: "https://github.com/abhiket29/Pokemon-Website",
    liveLink: "https://pokemon49.netlify.app/",
  },
  {
    id:8,
    title: "GameBadlo Website",
    image: project7,
    description:
      "Designed and developed a fully responsive official website for GameBadlo, a company offering a free-to-play fantasy cricket prediction game. The site introduces users to the app’s core features, game mechanics, and rewards system through a clean, responsive, and engaging interface. Built to attract and convert cricket fans, the website provides smooth navigation, promotional banners, and direct links to download the app. This project demonstrates my ability to craft high-impact, brand-driven web experiences that bridge user interest with product engagement.",
    technologies: ["React.js", "TailwindCSS", "JavaScript"],
    liveLink: "https://gamebadlo.com",
  },
];

export const CONTACT = {
  address: "Gurgaon, Haryana ",
  phoneNo: "+917837331298 ",
  email: "abhiket29@gmail.com",
};

export const countryCodes = [
  { code: "+1", country: "United States", flag: "US" },
  { code: "+91", country: "India", flag: "IND" },
  { code: "+44", country: "United Kingdom", flag: "GB" },
  { code: "+61", country: "Australia", flag: "AU" },
  { code: "+49", country: "Germany", flag: "DE" },
  { code: "+81", country: "Japan", flag: "JP" },
  { code: "+33", country: "France", flag: "FR" },
  { code: "+971", country: "United Arab Emirates", flag: "AE" },
  { code: "+93", country: "Afghanistan", flag: "AF" },
  { code: "+92", country: "Pakistan", flag: "PK" },
  { code: "+86", country: "China", flag: "CN" },
  { code: "+7", country: "Russia", flag: "RU" },
  { code: "+39", country: "Italy", flag: "IT" },
  { code: "+34", country: "Spain", flag: "ES" },
  { code: "+55", country: "Brazil", flag: "BR" },
  { code: "+82", country: "South Korea", flag: "KR" },
  { code: "+52", country: "Mexico", flag: "MX" },
  { code: "+27", country: "South Africa", flag: "ZA" },
  { code: "+31", country: "Netherlands", flag: "NL" },
  { code: "+47", country: "Norway", flag: "NO" },
  { code: "+46", country: "Sweden", flag: "SE" },
  { code: "+41", country: "Switzerland", flag: "CH" },
  { code: "+90", country: "Turkey", flag: "TR" },
  // { code: "+1", country: "Canada", flag: "CA" },
  { code: "+20", country: "Egypt", flag: "EG" },
  { code: "+63", country: "Philippines", flag: "PH" },
  { code: "+66", country: "Thailand", flag: "TH" },
  { code: "+62", country: "Indonesia", flag: "ID" },
  { code: "+234", country: "Nigeria", flag: "NG" },
  { code: "+880", country: "Bangladesh", flag: "BD" },
  { code: "+30", country: "Greece", flag: "GR" },
  { code: "+351", country: "Portugal", flag: "PT" },
  { code: "+64", country: "New Zealand", flag: "NZ" },
  { code: "+353", country: "Ireland", flag: "IE" },
  { code: "+43", country: "Austria", flag: "AT" },
  { code: "+45", country: "Denmark", flag: "DK" },
  { code: "+48", country: "Poland", flag: "🇵🇱" },
  { code: "+420", country: "Czech Republic", flag: "CZ" },
  { code: "+32", country: "Belgium", flag: "BE" },
  { code: "+598", country: "Uruguay", flag: "UY" },
  { code: "+375", country: "Belarus", flag: "BY" },
  { code: "+505", country: "Nicaragua", flag: "NI" },
  { code: "+373", country: "Moldova", flag: "MD" },
  { code: "+256", country: "Uganda", flag: "UG" },
  { code: "+263", country: "Zimbabwe", flag: "ZW" },
];
