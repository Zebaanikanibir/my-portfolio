import React from 'react';
import Sidebar from '../Sidebar/Sidebar'
import img1 from '../../images/2021-05-01 (2).png';
import img2 from '../../images/2021-05-01 (3).png';
import img3 from '../../images/2021-05-01 (6).png';
import img4 from '../../images/2021-05-01 (8).png';
import Header from '../Header/Header';
import './Wedding.css';
const Wedding = () => {
    return (
        <div className="wedding">
            <Header></Header>
        <div className="row container-fluid">
            
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
            <h2 className="pHead mt-5">DESTINATION WEDDING</h2>
                <h6 className="text-white mt-5">It is a wedding base website. In this website admin can add or remove services.After login an
                    user can book any service besides can pay by stripe.User also can add review.</h6>
                 <h6 className="mt-5"> 
                 <span className="span">React Bootstrap</span> <span className="span">React Authentication</span>
                  <span className="span">React Router Dom</span> </h6>
                 <h6 className="mt-5"><span className="span">React js</span><span className="span">Node js</span> <span className="span">Express js</span> <span className="span">Mongo
                    db</span></h6>
                    
                    <a target="_blank" href="https://assignment-11-92bb8.web.app/"><button id="button">Visit</button></a>
                    
                <div className="row image mt-5 mb-5">
                    <div className="col-md-3">
                        <img id="img1" src={img1} alt="" />
                    </div>
                    <div className="col-md-9">
                        <img id="img2" src={img4} alt="" />
                    </div>
                </div>

                
            </div>
        </div>
        </div>
    );
};

export default Wedding;