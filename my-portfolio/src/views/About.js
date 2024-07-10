import React from 'react';
import '../App.css'; // Import App.css for styling

const About = () => {
    return (
        <div className="view-container">
            <img src="/port_os.jpg" alt="Profile" className="profile-photo" />
            <div className="view-content">
                <h1>About Me</h1>
                <p>
                    This is the About page content. You can add more information about yourself here.
                </p>
            </div>
        </div>
    );
};

export default About;
