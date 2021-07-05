import React from 'react';
import RunBuddy from "../assets/run-buddy.png"
import OnTheScene from "../assets/project1.png"
import Pokemon from "../assets/team-page.jpg"

const Project = () => {
  return (
    <div className='projectComp'>
        <section className='projectsContainer'>
            
                <h5>Run Buddy (Html/CSS)</h5>
                <a href="https://rkurian97.github.io/run-buddy/" target="_blank" rel="noopener noreferrer">
                    <img src={RunBuddy} alt='Run Buddy Project' /> 
                </a>
            
                <h5>On the Scene App (Javascript/Html/CSS)</h5>
                <a href="https://rkurian97.github.io/bc-project-1/" target="_blank" rel="noopener noreferrer">
                    <img src={OnTheScene} alt='On The Scene App'/>
                </a>
            
            
                <h5>Pokemon Team Builder (Node/Express/Sequelize/Handlebars)</h5>
                <a href="https://bc-project-2.herokuapp.com" target="_blank" rel="noopener noreferrer">
                    <img src={Pokemon} alt='Pokemon Team Builder App'/>
                </a>
            
        </section>
        
    </div>
  );
};

export default Project;