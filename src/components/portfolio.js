import React from "react";
import budget from "./images/Budget tracker.png";
import burger from "./images/Healthcare Scheduler.png";
import fitness from "./images/Screenshot (152).png";
import foodastic from "./images/Screenshot (170).png";
import petocracy from "./images/image3.png";
import weather from "./images/dubai_image_0.jpg";
import quiz from "./images/DAYSCHEDULER.PNG";
// Font Awesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
//  React POP UP BOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

// Petocracy
const openPopupboxPetocracy = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src = {petocracy} alt="Petocracy App" />
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

const popupboxConfigPetocracy = {
    titleBar: {
        enable: true,
        text: "Petocracy App"
    },
    fadeIn: true,
    fadeInSpeed: 500,

};

// Foodtastic
const openPopupboxFoodtastic = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src = {foodastic} alt="Foodastic App" />
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

const popupboxConfigFoodtastic = {
    titleBar: {
        enable: true,
        text: "Foodastic App"
    },
    fadeIn: true,
    fadeInSpeed: 500,

};


// Quiz
const openPopupboxQuiz = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src = {quiz} alt="State Capital App" />
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

const popupboxConfigQuiz = {
    titleBar: {
        enable: true,
        text: "Quiz App"
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
const openPopupboxBurger = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src = {burger} alt="healthcare-scheduler App" />
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

const popupboxConfigBurger = {
    titleBar: {
        enable: true,
        text: "Burger Logger App"
    },
    fadeIn: true,
    fadeInSpeed: 500,

};


// Fitness Tracking App
const openPopupboxFitness = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src = {fitness} alt="Fitness Tracking App" />
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

const popupboxConfigFitness = {
    titleBar: {
        enable: true,
        text: "Fitness Tracking App"
    },
    fadeIn: true,
    fadeInSpeed: 500,

};

// Weather App
const openPopupboxWeather = () => {
    const content = (
    <>
    <img className="portfolio-image-popupbox" src = {weather} alt="Weather App" />
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

const popupboxConfigWeather = {
    titleBar: {
        enable: true,
        text: "Weather App"
    },
    fadeIn: true,
    fadeInSpeed: 500,

}

    return (
        <div id="portfolio" className= "portfolio-wrapper">
            <div className= "container">
                <h1 className="text-uppercase text-center py">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxPetocracy}>
                    <img className="portfolio-image" src={petocracy} alt="Petocracy App" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
                {/* - */}
                <div className="portfolio-image-box" onClick={openPopupboxFoodtastic}>
                    <img className="portfolio-image" src={foodastic} alt="Foodastic App" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />

                </div>
                {/* - */}
                <div className="portfolio-image-box" onClick={openPopupboxQuiz}>
                    <img className="portfolio-image" src={quiz} alt="State Capital Quiz App" />
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
                <div className="portfolio-image-box" onClick={openPopupboxBurger}>
                    <img className="portfolio-image" src={burger} alt="Burger Logger App" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />

                </div>
                {/* - */}
                <div className="portfolio-image-box" onClick={openPopupboxFitness}>
                    <img className="portfolio-image" src={fitness} alt="Fitness Tracking App" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />

                </div>
                {/* - */}
                <div className="portfolio-image-box" onClick={openPopupboxWeather}>
                    <img className="portfolio-image" src={weather} alt="Weather App" />
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />

                </div>
                {/* - */}
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigPetocracy} />
            <PopupboxContainer {...popupboxConfigBudget} />
            <PopupboxContainer {...popupboxConfigQuiz} />
            <PopupboxContainer {...popupboxConfigFoodtastic} />
            <PopupboxContainer {...popupboxConfigBurger} />
            <PopupboxContainer {...popupboxConfigFitness} />
            <PopupboxContainer {...popupboxConfigWeather} />
            </div>
    )
}

export default Portfolio;