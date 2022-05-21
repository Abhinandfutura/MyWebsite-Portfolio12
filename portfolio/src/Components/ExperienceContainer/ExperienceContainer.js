import React from "react";
import ExperienceBox from "../ExperienceBox/ExperienceBox";
import {Element} from 'react-scroll'
import './ExperlienceContainer.css'

function ExperienceContainer() {
  return (
    <Element className="experienceContainer" id="exp">
      <h1>Experience</h1>
      <div className="experienceContainer__info">
        <ExperienceBox  number="+10" title='Clients' style={{backgroundColor:'#f6400f'}}/>
        <ExperienceBox  number="20+" title='Projects'/>
        <ExperienceBox  number="500+" title='Students'/>
        <ExperienceBox  number="+10" title='Year of Teaching'/>
      </div>
    </Element>
  );
}

export default ExperienceContainer;
