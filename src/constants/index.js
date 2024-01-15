import { /*meta, shopify,*/ moreton, accenture } from "../assets/images";
import {
    contact,
    git,
    github,
    linkedin,
    html,
    css,
    mongodb,
    javascript,
    mui,
    nextjs,
    nodejs,
    excel,
    tableau,
    powerbi,
    jquery,
    bootstrap,
    sql,
    react,
    redux,

    /*car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,    
    pmi,
    google,
    agile,
    git,
    contact,
    excel,
    github,
    linkedin,
    scrum,
    communication,
    jira,
    kanban,
    risk,
    stakeholder,
    trello,*/
    


} from "../assets/icons";

export const skills = [
    {
        imageUrl: javascript,
        name: "Javascript",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: linkedin,
        name: "Linkedin",
        type: "platform",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: excel,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tableau,
        name: "Tableau",
        type: "Tool",
    },
    {
        imageUrl: powerbi,
        name: "Powerbi",
        type: "Tool",
    },
    {
        imageUrl: jquery,
        name: "JQuery",
        type: "Tool",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },
    {
        imageUrl: sql,
        name: "Sql",
        type: "Tools",
    },
    /*{
        imageUrl: github,
        name: "Github",
        type: "Version Control",
    },
    {
        imageUrl: linkedin,
        name: "LinkedIn",
        type: "platform",
    },
    {
        imageUrl: scrum,
        name: "Scrum",
        type: "Tools",
    },
    {
        imageUrl: communication,
        name: "Communication",
        type: "Skills",
    },
    {
        imageUrl: jira,
        name: "Jira",
        type: "Tools",
    },
    {
        imageUrl: kanban,
        name: "Kanban",
        type: "Tools",
    },
    {
        imageUrl: stakeholder,
        name: "Stakeholder Management",
        type: "Skills",
    },
    {
        imageUrl: trello,
        name: "Trello",
        type: "Tools",
    },
    {
        imageUrl: risk,
        name: "Risk Management",
        type: "Tools",
    },*/
];

export const experiences = [
    {
        title: "Web Developer ",
        company_name: "Moreton Bay Regional Council Entrepreneurship & Innovation",
        icon: moreton,
        iconBg: "#accbe1",
        date: "(1/10/2023 - 31/12/2023)",
        points: [
            "Completed a job simulation involving website planning and creation.",
            "Created a sitemap and user flow using a diagram creation tool.",
            "Used Web Development tools such as HTML,CSS and various other frameworks to create a landing page.",
            
        ],
    },
    {
        title: "Data Analyst Intern",
        company_name: "Accenture",
        icon: accenture,
        iconBg: "#fbc3bc",
        date: " (07/2023 – 08/2023)",
        points: [
            "Associating projects to the most suitable project management approach and understand the entire project management life cycle form initiation to closing a project.",
            "Learned to use Excel more effectively by creating Data Formatting, data editing, Data analysis, dashboard, VBAs, and Macros.",
            "Identify the requirements that need to be delivered, and which tasks we need to focus on as a data analyst.", 
            "We extract the data from big data set then clean model and analyze to create valuable insights for the client",
        ],
    },

    /*{
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },*/
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    /*{
        iconUrl: google,
        theme: 'btn-back-red',
        name: 'Professional Project Manager',
        description: ' It covers Foundations of Project Management, Project Initiation: Starting complete Project,  Project Planning: Putting it All in complete plan, Project Execution: Running the Project for output, Capstone: Applying Project Management in the Real World',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: linkedin,
        theme: 'btn-back-green',
        name: 'Business Analysis',
        description: ' It covers the role and skills of a business analyst, Distinguish the type of stakeholder needed for a specific activity.  Differentiate between the three points of view for breaking down requirements. Identify the factors for requirements in the release planning phase.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: accenture,
        theme: 'btn-back-blue',
        name: 'Jira Fundamentals',
        description: 'learnt JIRA Interface & gain a solid understanding of Jira.Learn how to create, use, and administer Projects, Tasks, Backlogs, Subtasks, Epics, User Stories, and Bugs. Understand how to handle live Agile project.Learn how to generate reports and burn-down charts',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: pmi,
        theme: 'btn-back-black',
        name: 'Generative AI projects Managers',
        description: 'It delivers on promises of facilitating learning in the following areas: Definitions of Artificial Intelligence (AI) and Generative AI (GenAI). Understand GenAI applications in project management. Discover the AI project management tools that can be used to maximize efficiency. Learn best practices for project management in AI as a way of working',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: google,
        theme: 'btn-back-red',
        name: 'Google Agile Project Management',
        description: ' It covers the understanding core beliefs of Agile and Scrum, and creating a transparent and collaborative environment where the team works as a single unit. This course teaches the principles and practices that make Agile and Scrum effective at managing projects',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    
    /*
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: '',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }*/
];