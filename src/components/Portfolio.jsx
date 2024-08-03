import  { useState } from 'react';
import '../css/portfolio.css';
import githubImg from '../assets/github-mark-white.png';
import Expense from '../assets/Ex.png'
import Truck from "../assets/trucking_marketing.png"

const Portfolio = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    const portfolioProjects = [
        {
            githubUrl: 'https://github.com/James-Harris2/FSJS-mern-app',
            webpageUrl: 'https://fsjs-mern-app.onrender.com/',
            screenshot: Expense,
            appName: 'Expense Tracker',
            appDescription: 'The Full-Stack Expense Tracker app is a comprehensive web application designed to simplify personal finance management.  The backend, powered by Node.js and Express, manages server-side logic and APIs, while MongoDB serves as the database, efficiently storing user data and transaction details.',
            languagesAndLibraries: ['React', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS', 'Bcrypt', 'Dotenv', 'Express-JWT', "Json Web Token"]
        },
        {
            githubUrl: 'https://github.com/James-Harris2/FSJS-mern-app',
            webpageUrl: 'https://landingpage-1-927ffb.webflow.io/',
            screenshot: Truck,
            appName: 'Truck Marketing App',
            appDescription: 'An e-commerce platform for selling digital products.',
            languagesAndLibraries: ['React', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS']
        },
        // {
        //     githubUrl: 'https://github.com/jordanburger22/assignments',
        //     webpageUrl: 'https://github.com/jordanburger22/assignments',
        //     screenshot: 'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        //     appName: 'Project 3',
        //     appDescription: 'A social networking app for connecting people.',
        //     languagesAndLibraries: ['React', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS']
        // },
        // {
        //     githubUrl: 'https://github.com/jordanburger22/assignments',
        //     webpageUrl: 'https://github.com/jordanburger22/assignments',
        //     screenshot: 'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        //     appName: 'Project 4',
        //     appDescription: 'A blog platform for sharing articles and posts.',
        //     languagesAndLibraries: ['React', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS']
        // }
    ];

    const handleProjectHover = (index) => {
        setHoveredProject(index);
    };

    const handleProjectLeave = () => {
        setHoveredProject(null);
    };

    const portfolioElements = portfolioProjects.map((proj, i) => {
        return (
            <div className='project-container' key={i}>
                <div className='proj-header'>
                    <div className='proj-banner'>
                        <h3>{proj.appName}</h3>
                        <a className='link' href={proj.githubUrl} target="_blank" rel="noopener noreferrer">
                            <img src={githubImg} alt="GitHub Logo" className="github-logo" />
                        </a>
                    </div>
                    <p>{proj.appDescription}</p>
                </div>
                <div
                    className='proj-img'
                    onMouseEnter={() => handleProjectHover(i)}
                    onMouseLeave={handleProjectLeave}
                >
                    <div className='img-container'>
                        <img className='proj-prev' src={proj.screenshot} alt={proj.appName} />
                        {hoveredProject === i && (
                            <div className='overlay'>
                                <a className='btn-live' href={proj.webpageUrl} target="_blank" rel="noopener noreferrer">
                                    Live Site
                                </a>
                            </div>
                        )}
                    </div>
                </div>
                <div className='proj-languages'>
                    {proj.languagesAndLibraries.map((str, i) => (
                        <span className='proj-languages-used' key={i}>•{str}</span>
                    ))}
                </div>
            </div>
        );
    });

    return (
        <div className="portfolio">
            {portfolioElements}
        </div>
    );
}

export default Portfolio;
