import React from 'react';
import Bar from '../Bar/Bar';
import image from '../../images/PicsArt_11-06-01.15.34-01.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import './Resume.css';
import Header from '../Header/Header';
import { $ }  from 'react-jquery-plugin'
import barba from '@barba/core';
import gsap from 'gsap/gsap-core';


const Resume = () => {
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
        <div className="wedding" data-barba="wrapper">
            <div className="loader-overlay one"></div>
            <div className="loader-overlay two"></div>
        <div className="wrapper" data-barba="container" data-barba-namespace="home">
            
       <div>
       <Header></Header>
            <div className="resume">
          <h1 className="pHead mt-5">MY RESUME</h1>
            <div className="row container-fluid align-items-center mt-5">
                <div className="col-md-6">
                <img className="slideLeft img-fluid" style={{width: '200px'}} src={image} alt=""/>
                </div>
                <div className="col-md-6">
                <h6 className="text-white slideRight">As a junior web developer I am very much dedicated in front end development. Front end development
                is an exciting career because it's always evolving and constantly changing. </h6>
                <h6 className="text-white slideRight">
                It is all about creativity and
                creative problem-solving and also that provides many opportunities for hands-on-learning.
                </h6>
                <a href="https://drive.google.com/uc?export=download&id=1ts05ImyqH2VuKNV5nNFT_qz7PrMFC8A7" ><button className="button slideRight">Download Resume <FontAwesomeIcon icon={faArrowDown} /></button></a>
                </div>
            </div>

            <Bar></Bar>



        </div>
       </div>
        </div>
         
        </div>
    );
};

export default Resume;