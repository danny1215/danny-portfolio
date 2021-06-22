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
                I am Daniel, a technology professional with expertise in full-stack web development and databases. As a full-stack developer, I am able to help clients interact and visualize their web browsers using web applications. I graduated with a degree in Structural Engineering in 2012 and owned my own construction company. I loved engineering but in recent years, I developed an interest in web development. Even though I have earned a certification as a Database Specialist, I have always had an interest in software development, especially when it comes to cloud computing. I have had an in depth exposure to Mule Soft and API integration systems and found it fascinating. I decided to build my skill set in web development, cloud computing and database management to further my career. In my free time, I like playing basketball, watching movies and writing SQL queries, just to see what the output would be. My goal is to have ample experience in finance, business and governmental sectors to enhance my portfolio. In the long run, I see myself acquiring enough experience to have my own company where I can have independent contracts nationally and internationally. “It is never too late to be what you might have been.” - George Eliot

                </p>
                <p>Connect with me on <a href="https://github.com/danny1215">GitHub</a> and <a href="https://www.linkedin.com/in/daniel-mestawat-5280691b6/">LinkedIn</a>.</p>

                
            </div>
            </div>
        </div>
    )
}

export default AboutMe;