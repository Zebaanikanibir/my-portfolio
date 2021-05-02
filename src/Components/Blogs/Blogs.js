import React from 'react';
import Header from '../Header/Header';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className="wedding blogs1">
         <Header></Header>
         
            <div className="blog">
                <h2 className="pHead slideRight">MT BLOGS</h2>
                <p className="text-white mt-5 blog slideLeft">i am a junior front end web developer.able to build a website with HTML, CSS,javaScript & reactJs.Skilled at writing well designed,testable & efficient code.ok..So first of all I want to become a skilled web developer in future because web development is first paced, challenging career centered on creative problem-solving & continuous innovation…</p>
                <p className="text-white blog slideLeft">As a web developer i have the opportunity to work for startups,agencies, large corporates even freelance.So it means i may able to work remotely anywhere in the world</p>
                <a href="https://zanikanibir.medium.com/" target="_blank" rel="noopener noreferrer"><button className="slideRight" id="button">Visit</button></a>
            </div>
         
        </div>
    );
};

export default Blogs;