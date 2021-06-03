import React from "react";
import resume from "../components/images/daniel mestawat-Resume (1).docx";

const Resume = () => {
    return (
        <div id="resume" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>Experience</h1>
                
            </div>
            <div className="container experience-wrapper">
            <a href={resume} className="btn-main-offer-resume">Resume</a>
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                <div className="timeline-content">
                    <h3>2019-Present</h3>
                    <p>contract Detroit, MG
                            Oversaw the development, testing, and rollout of a complete suite of Web-based software solutions.
                            Effectively performed regular database backup.
                            Organized and created shooting schedules for graphic design team, supervising the progress of
                            projects from production to post production.
                            Designed databases and ensured stability and reliability.
                            Creatively developed data architecture design to enable analysts to perform targeted customer
                            analysis.
                            Constructed database and warehouse, streamlined disparate data sources and unverified queries into
                            a main source.
                            Developed data models and database designs to plan projects.
                            Effectively developed and updated all documentation related to database technologies for the
                            department.
                            Maintained a 90% customer satisfaction support to clients in understanding and manipulating data to
                            obtain value through SQL and ETL technical processes and visual analytics tools.
                            Creatively planned, designed and streamlined data structures for analysis</p>
                    </div>    
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                <div className="timeline-content">
                    <h3>2012-2017</h3>
                    <p>Performed quality inspections of all plans, documents, and calculations as well as in-progress and final
                        bridge construction.
                        Quantity Surveying and Project Management.
                        Independently prepared and modified drawings, specs, calculations and graphs.
                        Prepare project budgets, maintain schedules and put together final documentation.
                        Continually improved methods and procedures for processes, measurement, documenting and work
                        flow techniques.</p>
                    </div>    
                </div>
                {/* - */}
               
            </div>
        </div>
    )
}

export default Resume;