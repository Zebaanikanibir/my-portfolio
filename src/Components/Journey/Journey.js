import React from 'react';
import Sidebar from '../Sidebar/Sidebar'
import img1 from '../../images/2021-05-02 (3).png';
import img2 from '../../images/2021-05-01 (20).png';
import img3 from '../../images/2021-05-01 (21).png';
import img4 from '../../images/2021-05-02 (4).png';
import Header from '../Header/Header';
const Journey = () => {
    return (
        <div className="wedding">
            <Header></Header>
            <div className="row container-fluid">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <h2 className="pHead mt-5 dtext">ENJOY JOURNEY </h2>
                <h6 className="text-white sright">It is a Transportation base website.An user can choose vehicle and by clicking on them 
                    </h6>
                    <h6 className="text-white">he/she
                    can go his desire location.</h6>
                    <h6 className="mt-5"> 
                 <span className="span">React Bootstrap</span> <span className="span">React Authentication</span>
                  <span className="span">React Router Dom</span> </h6>
                 <h6 className="mt-5"><span className="span">React js</span> </h6>
                    
                    
                <a target="_blank" href="https://assignment-9-2b49a.web.app/"><button id="button" className="slidein">Visit</button></a>
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
    );
};

export default Journey;