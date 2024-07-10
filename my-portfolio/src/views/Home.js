import React from 'react';
import './Home.css'; // Import Home.css for styling

const Home = () => {
    return (
        <div className="view-container">
            <div className="view-content">
                <div className="description-section">
                    <img src="/port_os.jpg" alt="Profile of Szymon" className="profile-photo" />
                    <div className="description-text">
                        <h1>Hi, I am Szymon! <span role="img" aria-label="emoji">🧑‍💻</span></h1>
                        <p>
                            I am a 4th-year student of Automation and Robotics with a specialization in Computer Science
                            in Control and Management at the AGH University of Science and Technology in Krakow. My interests
                            primarily lie in fields related to Data Science and Operational Research. This website hosts my portfolio
                            and showcases more of my work.
                        </p>
                        <p>
                            Check out my <a href="/Szymon_Szewczyk_CV_.pdf" rel="noopener noreferrer" target="_blank">CV</a> for more information, or explore the following sections:
                        </p>
                        <ul>
                            <li data-emoji="🔎">
                                <span>Learn more&nbsp;<a href="/about">About Me</a>&nbsp;and my background.</span>
                            </li>
                            <li data-emoji="📁">
                                <span>Discover my recent&nbsp;<a href="/projects">Projects</a>, including those related to data science and automation.</span>
                            </li>
                            <li data-emoji="📊">
                                <span>View my&nbsp;<a href="/stats">Stats</a> from GitHub, HackerRank, Kaggle, and other platforms showcasing my skills and achievements.</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <h2>Example Projects</h2>
                <div className="projects">
                    <div className="project">
                        <h3>Project 1 Title</h3>
                        <p>Description of project 1.</p>
                    </div>
                    <div className="project">
                        <h3>Project 2 Title</h3>
                        <p>Description of project 2.</p>
                    </div>
                    <div className="project">
                        <h3>Project 3 Title</h3>
                        <p>Description of project 3.</p>
                    </div>
                </div>
                <hr />
                <h2>Skills</h2>
                <div className="skills">
                    <div className="skill">
                        <div className="skill-icon">🐍</div>
                        <h3>Python</h3>
                        <p>Advanced: Numpy, Pandas, Matplotlib</p>
                    </div>
                    <div className="skill">
                        <div className="skill-icon">🌐</div>
                        <h3>HTML/CSS</h3>
                        <p>Intermediate</p>
                    </div>
                    <div className="skill">
                        <div className="skill-icon">💻</div>
                        <h3>C/C++</h3>
                        <p>Basics</p>
                    </div>
                    <div className="skill">
                        <div className="skill-icon">🗄️</div>
                        <h3>Databases</h3>
                        <p>Relational: MySQL, SQLite, PostgreSQL</p>
                    </div>
                    <div className="skill">
                        <div className="skill-icon">🌐</div>
                        <h3>Web app framework</h3>
                        <p>Intermediate Flask</p>
                    </div>
                    <div className="skill">
                        <div className="skill-icon">🗣️</div>
                        <h3>Language</h3>
                        <p>Polish: Native<br />English: B2</p>
                    </div>
                    <div className="skill">
                        <div className="skill-icon">📊</div>
                        <h3>Microsoft Office</h3>
                        <p>Intermediate</p>
                    </div>
                    <div className="skill">
                        <div className="skill-icon">🤖</div>
                        <h3>Machine learning</h3>
                        <p>SkLearn, TensorFlow</p>
                    </div>
                    <div className="skill">
                        <div className="skill-icon">🔧</div>
                        <h3>CI/CD</h3>
                        <p>GitHub Actions</p>
                    </div>
                    <div className="skill">
                        <div className="skill-icon">🔀</div>
                        <h3>Git</h3>
                        <p>Version Control</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
