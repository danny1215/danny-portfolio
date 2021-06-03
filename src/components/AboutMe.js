import React from "react";
import author from "../components/images/IMG-1120 (2).jpg";

const AboutMe = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
            <div className="col-lg-6 col-xm-12">
                <div className="photo-wrap mb-4">
                <img src={author} alt="Daniel" className="profile-img" />
                </div>
            </div>
            <div className="col-lg-6 col-xm-12">
            <h1 className="about-heading">About Me</h1>
            <p><strong>Allow me to introduce myself 
            </strong></p>
                <p>
                I am Daniel, a structural engineer, database specialties thriving to become a web developer. As a Full-stack developer i am able to help clients interact and visualize thier web browsers using web applications.  
                I graduated in Structural engineer 2012 and had my own construction company. I loved engineering but in recent years, I developed an interest for web development and has been working hard to grab an opportunity to pursue my newly discovered passion. 
                Even though I have earned a certification in Database Specialists, I have always had an interest in software development at the back of my mind especially when it comes to cloud computing. I have had an in depth exposure to Mule Soft and API Integration systems and It was fascinating. I decided to build my set of skills in web development and database management for an ideal knowledge to pursue cloud computing services.
                My goal is to have an ample experience in finance, business and governmental sectors to enhance my portfolio. In the long run, I see myself acquiring enough experience to have my own company where I can have an independent contracts nationally and internationally.
                'It is never too late to be what you might have been.'  George Eliot 
                </p>
                <p>Connect with me on <a href="https://github.com/danny1215">GitHub</a> and <a href="https://www.linkedin.com/in/daniel-mestawat-5280691b6/">LinkedIn</a>.</p>
            </div>
            </div>
        </div>
    )
}

export default AboutMe;