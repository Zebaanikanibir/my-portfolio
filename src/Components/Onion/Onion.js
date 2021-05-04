import React from 'react';
import Sidebar from '../Sidebar/Sidebar'
import img1 from '../../images/2021-05-04 (3).png';

import img4 from '../../images/2021-05-04 (4).png';
import Header from '../Header/Header';
const Onion = () => {
    return (
        <div>
            <div className="wedding">
            <Header></Header>
            <div className="row container-fluid">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <h2 className="pHead mt-5 dtext">HOT ONION </h2>
                <h6 className="text-white sright">This website is about 3 types meal in a day.Lunch Dinner & Breakfast
                    </h6>
                    <h6 className="text-white">Some can select any type of food and clicking any meal he can know details about the meal</h6>
                    <h6 className="mt-5"> 
                 <span className="span">React Bootstrap</span> <span className="span">React Authentication</span>
                  <span className="span">React Router Dom</span> </h6>
                 <h6 className="mt-5"><span className="span">React js</span> <span className="span">Mongodb</span><span className="span">Node js</span><span className="span">Express js js</span></h6>
                 
                
                    
                    
                <a target="_blank" href="https://hot-onion-f8dfa.web.app/"><button id="button" className="slidein">Visit</button></a>
                    <div className="row image mt-2 mb-5">
                    <div className="col-md-3">
                        <img id="img1" src={img4} alt="" />
                    </div>
                    <div className="col-md-9">
                        <img id="img2" src={img1} alt="" />
                    </div>
                </div>
                
            </div>
        </div>
        </div>
        </div>
    );
};

export default Onion;