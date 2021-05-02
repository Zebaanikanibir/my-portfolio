import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import image from '../../images/PicsArt_11-06-01.15.34-01.jpeg'
const Home = () => {
    return (
        <div className="home">
            <Header></Header>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-12 hDiv">
                    <h2 className="text-white slideUp">HI,🙋‍♀️</h2>
                    
                    
                    <h6 className="text-white slideUp">I am Junior Web developer able to build a Web presence from the ground up - from concept,</h6>
                    <h6 className="text-white slideUp">navigation, layout and programming to UX and SEO. Skilled at writing well-designed, testable and efficient code using current best practices in Web development. </h6>
                    <h6 className="text-white slideUp">Fast learner, hard worker and team player who is proficient in an array of scripting languages and multimedia Web tools.</h6>

                    <button className="button slideIn">MY PORTFOLIO</button>

                </div>
            </div>
        </div>
    );
};

export default Home;