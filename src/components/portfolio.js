import React from "react";
import budget from "./images/Budget tracker.png";
import Healthcare from "./images/Healthcare Scheduler.png";
import Team from "./images/Screenshot (152).png";
import Burger from "./images/Screenshot (170).png";
import weather from "./images/image3.png";
import travel from "./images/dubai_image_0.jpg";
import Bussy from "./images/Bussy-day-scheduler.png";
// Font Awesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//  React POP UP BOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

// Petocracy
const openPopupboxWeather = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src = {weather} alt="weather App" />
    <p>DM-Weather-Dashboard-06</p>
    <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/danny1215/DM-Weather-Dashboard-06", "_blank")}
    >https://github.com/danny1215/DM-Weather-Dashboard-06</a>
    <br></br>
    <b>Deployed:</b> <a a className="hyper-link" onClick={() => window.open("https://danny1215.github.io/DM-Weather-Dashboard-06/", "_blank")}
    >https://danny1215.github.io/DM-Weather-Dashboard-06/</a>
    </>
)
PopupboxManager.open({ content });
PopupboxManager.update({  content, config: {
                      titleBar: {  text: "DM-Weather-Dashboard-App"  }
      },
});
    
};

const popupboxConfigWeather = {
    titleBar: {
        enable: true,
        text: "weather App"
    },
    fadeIn: true,
    fadeInSpeed: 500,

};

// Foodtastic
const openPopupboxBurger= () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src = {Burger} alt="Burger App" />
    <p>Burger bieng Devoured or Not</p>
    <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/danny1215/burger", "_blank")}
    >https://github.com/danny1215/burger</a>
    <br></br>
    <b>Deployed:</b> <a a className="hyper-link" onClick={() => window.open("https://boiling-badlands-27126.herokuapp.com/", "_blank")}
    >https://boiling-badlands-27126.herokuapp.com/</a>
    </>
)
PopupboxManager.open({ content });
PopupboxManager.update({  content, config: {
                      titleBar: {  text: "Burger App"  }
      },
});
    
};

const popupboxConfigBurger = {
    titleBar: {
        enable: true,
        text: "Burger App"
    },
    fadeIn: true,
    fadeInSpeed: 500,

};


// Quiz
const openPopupboxBussy = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src = {Bussy} alt="Bussy App" />
    <p>Ready To make a schedule for a day time!</p>
    <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/danny1215/danielHomeWork5", "_blank")}
    >https://github.com/danny1215/danielHomeWork5</a>
    <br></br>
    <b>Deployed:</b> <a className="hyper-link" onClick={() => window.open("https://danny1215.github.io/danielHomeWork5/", "_blank")}
    >https://danny1215.github.io/danielHomeWork5/</a>
    </>
)
PopupboxManager.open({ content });
PopupboxManager.update({  content, config: {
                      titleBar: {  text: "Work-day-Scheduler App"  }
      },
});
    
};

const popupboxConfigBussy= {
    titleBar: {
        enable: true,
        text: "Bussy App"
    },
    fadeIn: true,
    fadeInSpeed: 500,

};

// Budget Tracker
const openPopupboxBudget = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src = {budget} alt="Budget Tracker App" />
    <p>Need to track your spending? Use this Budget Tracker</p>
    <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/danny1215/Danny-budget-Trackers", "_blank")}
    >https://github.com/danny1215/Danny-budget-Trackers</a>
    <br></br>
    <b>Deployed:</b> <a className="hyper-link" onClick={() => window.open("https://pure-river-76451.herokuapp.com/", "_blank")}
    >https://pure-river-76451.herokuapp.com/</a>
    </>
)
PopupboxManager.open({ content });
PopupboxManager.update({  content, config: {
                      titleBar: {  text: "Budget Tracking App"  }
      },
});
    
};

const popupboxConfigBudget = {
    titleBar: {
        enable: true,
        text: "Budget Tracking App"
    },
    fadeIn: true,
    fadeInSpeed: 500,

};

// Burger Logger App
const openPopupboxHealthcare = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src = {Healthcare} alt="healthcare-scheduler App" />
    <p>Ready to schedule a home healthcare schedule!</p>
    <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/danny1215/healthcare-scheduler", "_blank")}
    >https://github.com/danny1215/healthcare-scheduler</a>
    <br></br>
    <b>Deployed:</b> <a className="hyper-link" onClick={() => window.open("https://immense-escarpment-50949.herokuapp.com/", "_blank")}
    >https://immense-escarpment-50949.herokuapp.com/</a>
    </>
)
PopupboxManager.open({ content });
PopupboxManager.update({  content, config: {
                      titleBar: {  text: "healthcare-scheduler"  }
      },
});
    
};

const popupboxConfigHealthcare = {
    titleBar: {
        enable: true,
        text: "Healthcare App"
    },
    fadeIn: true,
    fadeInSpeed: 500,

};


// Fitness Tracking App
const openPopupboxTeam = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src = {Team} alt="Team Tracking App" />
    <p>An easy access of engineers profile </p>
    <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/danny1215/Danny-Team-Profile-Generator", "_blank")}
    >https://github.com/danny1215/Danny-Team-Profile-Generator</a>
    <br></br>
    <b>Deployed:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/danny1215/Danny-Team-Profile-Generator", "_blank")}
    >https://github.com/danny1215/Danny-Team-Profile-Generator</a>
    </>
)
PopupboxManager.open({ content });
PopupboxManager.update({  content, config: {
                      titleBar: {  text: "Danny-team-Profile-Generator"  }
      },
});
    
};

const popupboxConfigTeam = {
    titleBar: {
        enable: true,
        text: "Team Tracking App"
    },
    fadeIn: true,
    fadeInSpeed: 500,

};

// Weather App
const openPopupboxtravel = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src = {travel} alt="travel App" />
    <p>A guidance to find deliciouse foods, location of restourants.</p>
    <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/danny1215/group_project", "_blank")}
    >https://github.com/danny1215/group_project</a>
    <br></br>
    <b>Deployed:</b> <a className="hyper-link" onClick={() => window.open("https://nataliasozontova.github.io/group_project/", "_blank")}
    >https://nataliasozontova.github.io/group_project/</a>
    </>
)
PopupboxManager.open({ content });
PopupboxManager.update({  content, config: {
                      titleBar: {  text: "Travel Guide"  }
      },
});
    
};

const popupboxConfigtravel = {
    titleBar: {
        enable: true,
        text: "travel App"
    },
    fadeIn: true,
    fadeInSpeed: 500,

}

    return (
        <div id="portfolio" className= "portfolio-wrapper">
            <div className= "container">
                <h1 className="text-uppercase text-center py">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxWeather}>
                    <img className="portfolio-image" src={weather} alt="weather App" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
                {/* - */}
                <div className="portfolio-image-box" onClick={openPopupboxBurger}>
                    <img className="portfolio-image" src={Burger} alt="Burger App" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />

                </div>
                {/* - */}
                <div className="portfolio-image-box" onClick={openPopupboxBussy}>
                    <img className="portfolio-image" src={Bussy} alt="Bussy workday App" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />

                </div>
               
                {/* - */}
                
                <div className="portfolio-image-box" onClick={openPopupboxBudget}>
                    <img className="portfolio-image" src={budget} alt="Budget Tracking App" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />

                </div>
                {/* - */}
                <div className="portfolio-image-box" onClick={openPopupboxHealthcare}>
                    <img className="portfolio-image" src={Healthcare} alt="HealthCare App" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />

                </div>
                {/* - */}
                <div className="portfolio-image-box" onClick={openPopupboxTeam}>
                    <img className="portfolio-image" src={Team} alt="Team Tracking App" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />

                </div>
                {/* - */}
                <div className="portfolio-image-box" onClick={openPopupboxtravel}>
                    <img className="portfolio-image" src={travel} alt="travel App" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />

                </div>
                {/* - */}
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigWeather} />
            <PopupboxContainer {...popupboxConfigBudget} />
            <PopupboxContainer {...popupboxConfigBussy} />
            <PopupboxContainer {...popupboxConfigBurger} />
            <PopupboxContainer {...popupboxConfigHealthcare} />
            <PopupboxContainer {...popupboxConfigTeam} />
            <PopupboxContainer {...popupboxConfigtravel} />
            </div>
    )
}

export default Portfolio;