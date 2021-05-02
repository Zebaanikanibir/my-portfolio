import React from 'react';
import Bar from '../Bar/Bar';
import image from '../../images/PicsArt_11-06-01.15.34-01.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import './Resume.css';
import Header from '../Header/Header';



const Resume = () => {
    return (
        <div className="wedding">
            <Header></Header>
            <div className="resume">
          <h1 className="pHead mt-5">MY RESUME</h1>
            <div className="row container-fluid align-items-center mt-5">
                <div className="col-md-6">
                <img style={{width: '200px'}} src={image} alt=""/>
                </div>
                <div className="col-md-6">
                <h6 className="text-white">As a junior web developer I am very much dedicated in front end development. Front end development
                is an exciting career because it's always evolving and constantly changing. </h6>
                <h6 className="text-white">
                It is all about creativity and
                creative problem-solving and also that provides many opportunities for hands-on-learning.
                </h6>
                <a href="https://drive.google.com/uc?export=download&id=1iyBUtfC2Kymriben7OfCWlY0pt1p5IfP" ><button className="button">Download Resume <FontAwesomeIcon icon={faArrowDown} /></button></a>
                </div>
            </div>

            <Bar></Bar>



        </div>
        </div>
    );
};

export default Resume;