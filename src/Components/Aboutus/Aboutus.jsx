import React from 'react';
import img from '../../assets/image/aboutme.jpeg'

const AboutUs = () => {
    return (
        <>
        <div className="about p-5"> 
        <div className="container">
            <div className="row p-5">
                <div className="col-lg-4">
                  <img src={img} alt="" className="img-fluid"/>
                </div>
              
                <div className="col-lg-8">
                  <h2>About Me</h2>
                  <p>I'm Abdelrahman, a 21-year-old front-end developer. I'm great with HTML, CSS,JavaScript And React creating cool designs that work well on any device. I'm also getting into back-end stuff, learning Node.js and how to make databases with MongoDB. My goal is to become a MERN stack developer, which means using MongoDB, Express.js, React, and Node.js all together. I'm good at fixing problems and making things work better. I like learning new techechnologies and talking to different people about what I'm doing. Balancing my time is important to me, so I handle my studies, work, and personal projects well. I'm excited to keep learning and creating awesome stuff on the web!</p>
                  <button className="btn btn-primary">Download Resume</button>
                </div>
              </div>        
        </div>
    </div>
    
    
        </>
    );
}

export default AboutUs;
