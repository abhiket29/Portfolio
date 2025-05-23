import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a dedicated and results-driven Software Developer with over two years of experience in building scalable, high-performance web applications. Specializing in front-end development with React.js, Next.js and Redux Toolkit, I am committed to delivering seamless, user-centric digital experiences.

Passionate about innovation, I focus on crafting solutions that enhance user engagement and drive business growth. With a continuous learning mindset, I thrive in dynamic environments that challenge me to push boundaries and stay ahead of front-end development trends.`;

export const ABOUT_TEXT = `A dedicated front-end web developer with two years of experience specializing in React.js, Next.js and Redux Toolkit. Skilled in building responsive, user-centric applications with clean, scalable code and efficient state management. Passionate about creating seamless user experiences, solving UI challenges, and staying updated with the latest front-end trends. Actively involved in the developer community and open-source contributions to drive continuous growth and innovation.`;

export const EXPERIENCES = [
  {
    year: "May 2024 - Present",
    role: "Software Developer",
    company: "TAAB Solutions, Gurugram",
    description: `Designed and developed user interfaces for web applications React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "TailwindCSS", "JavaScript", "React.js", "Redux Toolkit"],
    // description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    // technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "Oct 2023 - April 2024",
    role: "QA Engineer",
    company: "TAAB Solutions, Gurugram",
    description: `Performed end-to-end manual testing, including functional, regression, and system testing, ensuring software met quality standards.`,
    technologies: ["Jira", "JMeter", "Manual Testing"],
  },
  {
    year: "Dec 2022 - Sep 2023",
    role: "QA Engineer",
    company: "RV Online Gaming Pvt. Ltd, Gurugram",
    description: `Executed performance tests using JMeter or LoadRunner to identify bottlenecks and improve system scalability.Worked closely with cross-functional teams, including developers and product managers to ensure alignment on requirements and quality standards.`,
    technologies: ["Jira", "JMeter", "Manual Testing"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "Developed a fully functional e-commerce website that includes key features such as product listing, detailed product pages, a shopping cart with real-time updates, and secure user authentication. The platform allows users to browse products, add items to their cart, and proceed through a streamlined checkout process. The authentication system ensures secure login and registration, enhancing user trust and protecting sensitive data. The application is designed with a responsive layout for optimal performance across all devices, providing a seamless shopping experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/abhiket29/E-commerce"
  },
  {
    title: "TAAB Website",
    // image: project1,
    description:
      "Built a fully responsive, cross-browser compatible website using React.js and Tailwind CSS, ensuring a clean and semantic HTML5 structure to enhance SEO and accessibility. I integrated JavaScript logic to add dynamic interactivity, including modals, sliders, and navigation toggles, resulting in a smooth and engaging user experience.",
    technologies: ["HTML", "TailwindCSS", "JavaScript", "React.js"],
    // githubLink: "https://github.com/abhiket29/E-commerce"
  },
  {
    title: "GameBadlo CRM",
    // image: project1,
    description:
      "Developed a modular CRM system using React.js with Redux Toolkit for efficient state and API management. The system included dynamic forms and dashboards for creating and managing competitions, game cards, and advertisements, all integrated using Redux Toolkit's createAsyncThunk for seamless asynchronous operations. Additionally, I implemented role-based routing and protected routes for Admin and User roles to ensure secure and appropriate access to different modules.",
    technologies: ["HTML", "TailwindCSS", "JavaScript", "React.js", "Redux Toolkit"],
    // githubLink: "https://github.com/abhiket29/E-commerce"
  },
  {
    title: "Todo List App",
    image: project2,
    description:
      "Built an application for managing tasks and projects, designed to streamline team collaboration and productivity. The app includes features such as task creation, assignment to team members, setting deadlines, and real-time progress tracking. Users can organize projects into categories, prioritize tasks, and monitor completion status through interactive dashboards. The interface is user-friendly and responsive, ensuring smooth usage across all devices. This solution helps teams stay organized, meet deadlines, and maintain clear visibility over project timelines and responsibilities.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js"],
    githubLink: "https://github.com/abhiket29/ToDo-List"
  },
  {
    title: "Portfolio",
    image: project3,
    description:
      "Developed a personal portfolio website to showcase my projects, technical skills, and contact information in a clean and professional manner. The website is fully responsive and optimized for performance, providing a smooth experience across devices and browsers. It features detailed sections for individual projects with descriptions and live links, an overview of my skill set, and an integrated contact form for easy communication. Designed with modern web technologies, the portfolio reflects my passion for development and serves as a central hub for potential clients, collaborators, and employers to learn more about my work..",
    technologies: ["HTML", "TailwindCSS", "JavaScript", "React.js"],
    githubLink: "https://github.com/abhiket29/Portfolio"
  },
  {
    title: "Pokémon Website",
    image: project4,
    description:
      "Developed a responsive Pokémon-themed website that showcases detailed information about various Pokémon, creating an engaging and interactive user experience. The application features a search bar and filtering options, allowing users to easily find Pokémon based on name, type, or other attributes. Built with a clean and intuitive UI, the website adapts seamlessly across devices and browsers. This project highlights my ability to work with APIs, manage dynamic data rendering, and create user-friendly interfaces centered around a fun and nostalgic theme.",
    technologies: ["HTML", "CSS", "API Integration", "React.js"],
    githubLink: "https://github.com/abhiket29/Pokemon-Website"
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
  { code: "+263", country: "Zimbabwe", flag: "ZW" }
];
