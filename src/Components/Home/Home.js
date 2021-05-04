import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import image from '../../images/PicsArt_11-06-01.15.34-01.jpeg'
import { $ }  from 'react-jquery-plugin'
import barba from '@barba/core';
import gsap from 'gsap/gsap-core';


const Home = () => {
    
    function transitionAnimation(){
        gsap.to(".loader-overlay.one",{
        
            duration:1,
            scaleX:1,
            transformOrigin: "left",
            ease: "power1.inOut"
        
        });
        gsap.to(".loader-overlay.one",{
        
            duration:1,
            scaleX:0,
            transformOrigin: "right",
            ease: "power1.inOut",
            delay:2
        
        });
        gsap.to(".loader-overlay.two",{
        
            duration:1.4,
            scaleX:1,
            transformOrigin: "left",
            ease: "power1.inOut",
            
        
        });
        gsap.to(".loader-overlay.two",{
        
            duration:1.4,
            scaleX:0,
            transformOrigin: "right",
            ease: "power1.inOut",
            delay: 1.6
        
        });
        
        
        }

        function delay(n){
            n = n || 4000;
            return new Promise((done) =>{
            
            
                setTimeout(() => {
            
                    done();
                }, n)
            })
            
            
            }

            $(function(){

                barba.init({
                    sync: true,
                    transitions: [{
                        
                      name: 'default-transition',
                     async leave(data) {
                        // create your stunning leave animation here
                        const done = this.async()
            
                       
                        setTimeout(function(){
                            transitionAnimation()
                        },2000)
                        
                        await delay(3000);
                        done()
                      },
                     async enter(data) {
                        // create your amazing enter animation here
                      }
                    }]
                  });
            
            })





    return (
        <div className="home" data-barba="wrapper">

            <div className="loader-overlay one"></div>
            <div className="loader-overlay two"></div>

           <div className="wrapper" data-barba="container" data-barba-namespace="home">
           <div>
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

           </div>
        </div>
    );
};

export default Home;