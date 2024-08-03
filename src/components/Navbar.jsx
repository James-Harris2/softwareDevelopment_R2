import { useNavigate } from 'react-router-dom';
import '../css/navbar.css';
import githubImg from '../assets/github-mark-white.png';
import linkedinImg from '../assets/linkedin-app-white-icon.png'

const Navbar = () => {
    const navigate = useNavigate();

    const handleNavigate = (e) => {
        const { value } = e.target;
        navigate(value);
    };

    return (
        <nav className="nav">
            <h3>James Harris</h3>
            <div className='nav-btn-div'>
                <button className='nav-link' onClick={handleNavigate} value='/'>About</button>
                <button className='nav-link' onClick={handleNavigate} value='/portfolio'>Portfolio</button>
                <button className='nav-link' onClick={handleNavigate} value='/contact'>Contact</button>
                <a className='nav-link outbound' href='https://github.com/James-Harris2/' target="_blank" rel="noopener noreferrer">
                    <img className='nav-logo' src={githubImg} />
                </a>
                <a className='nav-link outbound' href='https://www.linkedin.com/in/james-harris-6b8a33110/' target="_blank" rel="noopener noreferrer">
                    <img className='nav-logo linkedin' src={linkedinImg} />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
