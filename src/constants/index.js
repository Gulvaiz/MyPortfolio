import tinder from "../assets/projects/tinder.png"
import netflixLogo from "../assets/projects/netflixLogo.png"
import googleSheetLogo from "../assets/projects/googleSheetLogo.png"
import car from "../assets/projects/car.png"
import jira from "../assets/projects/jira.png"
import logo from "../assets/logo.png"

export const HERO_CONTENT = `Hi, I am a Computer Science and Engineering graduate with expertise in full-stack development, specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). I excel in crafting intuitive and visually engaging front-end designs using React.js, Tailwind CSS, and JavaScript, ensuring seamless user interactions. With strong back-end skills and a passion for delivering scalable, responsive, and impactful applications, I aim to create exceptional digital experiences.`

export const ABOUTME = `My journey in web development has been motivated by a commitment to creating scalable, responsive, and impactful applications that enhance user experiences. I possess strong abilities as a quick learner, problem solver, and collaborative team member, excelling in dynamic and fast-paced environments. Through a combination of creativity, meticulous attention to detail, and a robust work ethic, I am dedicated to delivering high-quality digital solutions. My commitment to innovation and ongoing professional growth ensures that I contribute substantial value to my projects and teams.`

export const PROJECTS = [
    {
        title: "DevTinder",
        image: tinder,
        description: "Currently ongoing",
        gitlink: "https://github.com/Gulvaiz/DevTinder",
        technologies: ["NodeJS", "ExpressJS", "MongoDB","ReactJS", "Javascript", "Redux", "TailwindCSS", "HTML", "CSS"]
    },
    {
        title: "Netflix-GPT",
        image: netflixLogo,
        description: "I developed a Netflix-GPT clone using React.js, Redux, Firebase, and Tailwind CSS, incorporating TMDB and OpenAI APIs. This project features a responsive design with an intuitive user interface, GPT-powered search functionality, and multi-language support for an enhanced user experience. Key highlights include autoplay trailers and seamless user authentication. The project demonstrates advanced integration of APIs, state management with Redux, and the ability to create interactive and scalable web applications." ,
        gitlink: "https://github.com/Gulvaiz/NetflixGPT",
        technologies: ["ReactJS", "Javascript", "Redux", "TailwindCSS", "HTML", "CSS", "TMDB", "Firebase"]
    },
    {
        title: "My Portfolio",
        image: logo,
        description: "I created a responsive personal portfolio website using React, JavaScript, Tailwind CSS, and Framer Motion to showcase my projects, education, skills, and contact information. It features a modern design, smooth animations, and a user-friendly layout. Key sections include Projects with links and details, About Me, Education, and a Contact Form. The site also offers downloadable resumes and certificates, with direct links to my GitHub, LinkedIn, and Gmail, serving as a professional platform for networking and opportunities.",
        gitlink: "https://github.com/Gulvaiz/Google-Sheet-Clone",
        technologies: ["React JS", "Javascript", "HTML", "CSS", "VScode"]
    },
    {
        title: "GoogleSheets",
        image: googleSheetLogo,
        description: "I developed a Netflix-GPT clone using React.js, Redux, Firebase, and Tailwind CSS, incorporating TMDB and OpenAI APIs. This project features a responsive design with an intuitive user interface, GPT-powered search functionality, and multi-language support for an enhanced user experience. Key highlights include autoplay trailers and seamless user authentication. The project demonstrates advanced integration of APIs, state management with Redux, and the ability to create interactive and scalable web applications.",
        gitlink: "https://github.com/Gulvaiz/Google-Sheet-Clone",
        technologies: ["Javascript", "HTML", "CSS", "VScode"]
    },
    {
        title: "Jira App",
        image: jira,
        description: "I developed a Jira clone using Javascript, HTML, CSS. This project features a responsive design with an intuitive user interface, Where you can perform CRUD operations like Add, Delete, Update, and Create the Task. Key highlights include Drag and Drop the task card.",
        gitlink: "https://github.com/Gulvaiz/jiraClone",
        technologies: ["Javascript", "HTML", "CSS"]
    },
    {
        title:"Car Game",
        image:car,
        description: "I developed a Car Game using Javascript, HTML, CSS. This project features a responsive design with an intuitive user interface, Where you can play car racing game. it will calculate you score and stops when the car collides with another car and shows the players score",
        gitlink: "https://github.com/Gulvaiz/Car-Game",
        technologies: ["Javascript", "HTML", "CSS"]
    }
    
]

export const CONTACT = {
     address: "C-118 Aziz Building, Shaheen Bagh, okhla, New Delhi-110025",
     phone: "+91 9870750779",
     email: "gulvaizalam12@gmail.com",
     linkedin: "https://www.linkedin.com/in/gulvaiz-alam",
     github: "https://github.com/Gulvaiz?tab=repositories"
}

export const EDUCATION = [
    {
        degree: "Bachelor of Technology",
        school: "Meerut Institute of Engineering and Technology, Meerut",
        year: "2019-23"
    },
    {
        degree: "12th",
        school: "M G Public School, Muzaffarnagar",
        year: "2018-19"
    },
    {
        degree: "10th",
        school: "M G Public School, Muzaffarnagar",
        year: "2016-17"
    },
]