import React from 'react';
import './Bar.css';
const Bar = () => {
    return (
        
            <div className="bheight">
                <h2 className="pHead mt-5 animate__animated animate__bounce">SKILLS</h2>
                <div className="row skills container-fluid">
               
               <div className="col-md-6">
                   <div className="pro">
                       <h6>HTML5 90%</h6> <span className="bar"><span className="html"></span></span>
                   </div>
                   <div className="pro">
                       <h6>CSS3 80%</h6> <span className="bar"><span className="css"></span></span>
                   </div>
                   <div className="pro">
                       <h6>JAVASCRIPT 70%</h6> <span className="bar"><span className="javascript"></span></span>
                   </div>
                   <div className="pro">
                       <h6>REACTJS 90%</h6> <span className="bar"><span className="html"></span></span>
                   </div>
                   <div className="pro">
                       <h6>MONGODB 80%</h6> <span className="bar"><span className="css"></span></span>
                   </div>
                   <div className="pro">
                       <h6>BOOTSTRAP 90%</h6> <span className="bar"><span className="html"></span></span>
                   </div>
                   
               </div>
               <div className="col-md-6">
                   <div className="pro">
                       <h6>GITHUB 90%</h6> <span className="bar"><span className="html"></span></span>
                   </div>
                   <div className="pro">
                       <h6>FIREBASE 80%</h6> <span className="bar"><span className="css"></span></span>
                   </div>
                   <div className="pro">
                       <h6>NETLIFY 90%</h6> <span className="bar"><span className="html"></span></span>
                   </div>
                   <div className="pro">
                       <h6>HEROKU 90%</h6> <span className="bar"><span className="html"></span></span>
                   </div>
                   <div className="pro">
                       <h6>NODE JS 70%</h6> <span className="bar"><span className="javascript"></span></span>
                   </div>
                   <div className="pro">
                       <h6>EXPRESS JS 70% </h6> <span className="bar"><span className="javascript"></span></span>
                   </div>
               </div>
           </div>
       
            </div>
    );
};

export default Bar;