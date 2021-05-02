import React from 'react';
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header';
import img1 from '../../images/2021-05-01 (11).png';
import img2 from '../../images/2021-05-01 (13).png';
import img3 from '../../images/2021-05-01 (15).png';
import img4 from '../../images/2021-05-01 (9).png';
const BDShop = () => {
    return (
        <div className="wedding">
            <Header></Header>
            <div className="row container-fluid">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <h2 className="pHead mt-5">BD SHOP</h2>
                    <h6 className="text-white">It is a e-commerce site. By clicking one products user go to the checkout page after login.and
                        from the checkout page he/she can buy the product.</h6>
                        <h6 className="mt-5"> 
                 <span className="span">React Bootstrap</span> <span className="span">React Authentication</span>
                  <span className="span">React Router Dom</span> </h6>
                 <h6 className="mt-5"><span className="span">React js</span><span className="span">Node js</span> <span className="span">Express js</span> <span className="span">Mongo
                    db</span></h6>
                    <a target="_blank" href="https://assignment-10-a8eff.web.app/"><button id="button">Visti</button></a>
                    <div className="row image mt-5 mb-5">
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

export default BDShop;