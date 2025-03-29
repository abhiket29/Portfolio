import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a dedicated and results-driven Software Developer with a strong focus on building scalable, high-performance web and mobile applications. With two years of hands-on experience, I have developed expertise in front-end technologies like React.js and cross-platform application development using Flutter. I am passionate about creating innovative solutions that enhance user experience and drive business growth. Continuously eager to learn and adapt, I thrive in dynamic environments that challenge me to push the boundaries of technology.`;

export const ABOUT_TEXT = `I am a skilled and adaptable software developer with two years of experience in building efficient, user-centric web and mobile applications. Proficient in React and Flutter, I have a strong foundation in front-end development and a keen eye for creating seamless user experiences.

My journey in software development began with a deep curiosity about technology, which has evolved into a passion for solving complex problems and delivering high-quality, scalable solutions. I thrive in collaborative environments, where I continuously learn, adapt, and innovate to stay ahead of industry trends.

Beyond coding, I am actively involved in exploring emerging technologies, contributing to open-source projects, and staying engaged with the developer community.`;

export const EXPERIENCES = [
  {
    year: "May 2024 - Present",
    role: "Software Developer",
    company: "TAAB Solutions, Gurugram",
    description: `Designed and developed user interfaces for web applications React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "JavaScript", "React.js"],
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
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/abhiket29/E-commerce"
  },
  {
    title: "Todo List App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    githubLink: "https://github.com/abhiket29/ToDo-List"
  },
  {
    title: "Portfolio",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "TailwindCSS", "JavaScript", "React"],
    githubLink: "https://github.com/abhiket29/Portfolio"
  },
  {
    title: "Pokémon Website",
    image: project4,
    description:
      "Developed a responsive Pokémon-themed website showcasing Pokémon details, including search and filtering functionality.",
    technologies: ["HTML", "CSS", "API Integration", "React"],
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
