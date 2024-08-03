import headerImg from '../assets/asset2_me.jpg'
import '../css/about.css';

const About = () => {
    const techStack = [
        "JavaScript",
        "ES6",
        "React",
        "HTML",
        "CSS",
        "Node.js",
        "Express",
        "AJAX/HTTP",
        "Mongoose",
        "MongoDB",
        "JSON",
        "Git"
    ];

    const techElements = techStack.map((s, i) => <span className='skill' key={i}>• {s}</span>)

    return (
        <div className="about-container">
            <div className='header'>
                <img src={headerImg} className='header-img' alt='Header' />
                <p> I'm a full-stack developer with a unique journey from commercial trucking to the world of technology. My injury led me to discover a passion for web development, where I now excel at creating innovative solutions with the MERN stack. I thrive on challenges, drawing from real-world experience to deliver projects that push boundaries and resonate with users. Let's build something extraordinary together. </p>
            </div>
            <div className='skill-stack'>
                {techElements}
            </div>
            <div className='experience'>
                <h3>Professional Experience</h3>
                <ul>
                    <li>
                        <h4>Backend Developer </h4>
                        <ul>
                            <li>Built server-side logic for Expense Tracker App || develop and manage the application's core processes, handling user requests, calculations, and business logic.</li>
                            <li>Database Management|| design and optimized database structures, ensuring efficient data storage, retrieval, integrity, and security. </li>
                            <li>API || created API's to facilitate communication between different parts of the application, enabling seamless integration with the frontEnd. </li>
                            <li>System Architecture || designed the overall system architecture, ensuring the application is scalable, performant, and secure</li>
                        </ul>
                    </li>
                    <li>
                        <h4>Commercial Driver</h4>
                        <ul>
                            <li>Day to Day opeartion shifted || Expertly operate refrigerated van reefers, ensuring safe and timely delivery of temperature-controlled cargo.</li>
                            <li>Strictly adhere to federal, state, and company regulations while maintaining meticulous vehicle upkeep.</li>
                            <li>Efficiently load, unload, and secure freight, prioritizing customer satisfaction..</li>
                            <li>Developed skills in managing high-stress environments and leading people, which I find highly applicable to web development.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default About;
