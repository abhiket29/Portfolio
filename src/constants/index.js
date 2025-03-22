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
  },
  {
    title: "Todo List App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Portfolio",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "TailwindCSS", "JavaScript", "React"],
  },
  {
    title: "Pokémon Website",
    image: project4,
    description:
      "Developed a responsive Pokémon-themed website showcasing Pokémon details, including search and filtering functionality.",
    technologies: ["HTML", "CSS", "API Integration", "React"],
  },
];

export const CONTACT = {
  address: "Gurgaon, Haryana ",
  phoneNo: "+917837331298 ",
  email: "abhiket29@gmail.com",
};

export const countryCodes = [
  { code: "afg", name: "Afghanistan", dialCode: "+93" },
  { code: "alb", name: "Albania", dialCode: "+355" },
  { code: "dz", name: "Algeria", dialCode: "+213" },
  { code: "as", name: "American Samoa", dialCode: "+1684" },
  { code: "ad", name: "Andorra", dialCode: "+376" },
  { code: "ao", name: "Angola", dialCode: "+244" },
  { code: "ai", name: "Anguilla", dialCode: "+1264" },
  { code: "ag", name: "Antigua and Barbuda", dialCode: "+1268" },
  { code: "ar", name: "Argentina", dialCode: "+54" },
  { code: "am", name: "Armenia", dialCode: "+374" },
  { code: "au", name: "Australia", dialCode: "+61" },
  { code: "at", name: "Austria", dialCode: "+43" },
  { code: "az", name: "Azerbaijan", dialCode: "+994" },
  { code: "bh", name: "Bahrain", dialCode: "+973" },
  { code: "bd", name: "Bangladesh", dialCode: "+880" },
  { code: "bb", name: "Barbados", dialCode: "+1246" },
  { code: "by", name: "Belarus", dialCode: "+375" },
  { code: "be", name: "Belgium", dialCode: "+32" },
  { code: "bz", name: "Belize", dialCode: "+501" },
  { code: "bj", name: "Benin", dialCode: "+229" },
  { code: "bt", name: "Bhutan", dialCode: "+975" },
  { code: "bo", name: "Bolivia", dialCode: "+591" },
  { code: "ba", name: "Bosnia and Herzegovina", dialCode: "+387" },
  { code: "br", name: "Brazil", dialCode: "+55" },
  { code: "bg", name: "Bulgaria", dialCode: "+359" },
  { code: "kh", name: "Cambodia", dialCode: "+855" },
  { code: "cm", name: "Cameroon", dialCode: "+237" },
  { code: "ca", name: "Canada", dialCode: "+1" },
  { code: "cn", name: "China", dialCode: "+86" },
  { code: "co", name: "Colombia", dialCode: "+57" },
  { code: "cg", name: "Congo", dialCode: "+242" },
  { code: "cr", name: "Costa Rica", dialCode: "+506" },
  { code: "hr", name: "Croatia", dialCode: "+385" },
  { code: "cu", name: "Cuba", dialCode: "+53" },
  { code: "cy", name: "Cyprus", dialCode: "+357" },
  { code: "cz", name: "Czech Republic", dialCode: "+420" },
  { code: "dk", name: "Denmark", dialCode: "+45" },
  { code: "eg", name: "Egypt", dialCode: "+20" },
  { code: "fr", name: "France", dialCode: "+33" },
  { code: "de", name: "Germany", dialCode: "+49" },
  { code: "gh", name: "Ghana", dialCode: "+233" },
  { code: "gr", name: "Greece", dialCode: "+30" },
  { code: "ind", name: "India", dialCode: "+91" },
  { code: "id", name: "Indonesia", dialCode: "+62" },
  { code: "ir", name: "Iran", dialCode: "+98" },
  { code: "iq", name: "Iraq", dialCode: "+964" },
  { code: "ie", name: "Ireland", dialCode: "+353" },
  { code: "it", name: "Italy", dialCode: "+39" },
  { code: "jp", name: "Japan", dialCode: "+81" },
  { code: "jo", name: "Jordan", dialCode: "+962" },
  { code: "ke", name: "Kenya", dialCode: "+254" },
  { code: "kw", name: "Kuwait", dialCode: "+965" },
  { code: "lb", name: "Lebanon", dialCode: "+961" },
  { code: "my", name: "Malaysia", dialCode: "+60" },
  { code: "mx", name: "Mexico", dialCode: "+52" },
  { code: "ma", name: "Morocco", dialCode: "+212" },
  { code: "np", name: "Nepal", dialCode: "+977" },
  { code: "nl", name: "Netherlands", dialCode: "+31" },
  { code: "nz", name: "New Zealand", dialCode: "+64" },
  { code: "ng", name: "Nigeria", dialCode: "+234" },
  { code: "pak", name: "Pakistan", dialCode: "+92" },
  { code: "ph", name: "Philippines", dialCode: "+63" },
  { code: "pl", name: "Poland", dialCode: "+48" },
  { code: "pt", name: "Portugal", dialCode: "+351" },
  { code: "qa", name: "Qatar", dialCode: "+974" },
  { code: "ro", name: "Romania", dialCode: "+40" },
  { code: "ru", name: "Russia", dialCode: "+7" },
  { code: "sa", name: "Saudi Arabia", dialCode: "+966" },
  { code: "sg", name: "Singapore", dialCode: "+65" },
  { code: "za", name: "South Africa", dialCode: "+27" },
  { code: "kr", name: "South Korea", dialCode: "+82" },
  { code: "es", name: "Spain", dialCode: "+34" },
  { code: "lk", name: "Sri Lanka", dialCode: "+94" },
  { code: "se", name: "Sweden", dialCode: "+46" },
  { code: "ch", name: "Switzerland", dialCode: "+41" },
  { code: "th", name: "Thailand", dialCode: "+66" },
  { code: "tr", name: "Turkey", dialCode: "+90" },
  { code: "ae", name: "United Arab Emirates", dialCode: "+971" },
  { code: "uk", name: "United Kingdom", dialCode: "+44" },
  { code: "us", name: "United States", dialCode: "+1" },
  { code: "vn", name: "Vietnam", dialCode: "+84" },
  { code: "zw", name: "Zimbabwe", dialCode: "+263" },
];