import React from 'react';
import './Styles/App.css';
import PostItem from './components/PostItem';
import PostItem2 from './components/PostItem2';
import styled from 'styled-components';


import projectImage1 from './assets/img/project-1.jpg'; 
import projectImage2 from './assets/img/project-2.jpg'; 
import projectImage3 from './assets/img/project-3.jpg'; 
import projectImage4 from './assets/img/project-4.jpg'; 
import projectImage5 from './assets/img/project-5.jpg'; 
import projectImage6 from './assets/img/project-6.jpg'; 
import avatar2 from './assets/img/avatar-2.jpg'; 
import avatar3 from './assets/img/avatar-3.jpg'; 
import avatar4 from './assets/img/avatar-4.jpg'; 

const Portfolio = styled.span`
display: inline-block;
border: 1px solid #5c64cf;
padding: 8px 20px;
color: #5c64cf;
-webkit-transform: rotate(-15deg);
transform: rotate(-15deg);
`

const Portfolio2 = styled.span`
font-size: 55px;
margin: 0;
color: #18171c;
`

function App() {
  return (
    <div className="App">
      <section className="portfolio">
        <div className="section-heading">
          <div className="portfolio-title">
            <h6><Portfolio>Portfolio</Portfolio></h6>
            <h3><Portfolio2>Latest Projects</Portfolio2></h3>
          </div>
        </div>
        <div className="post-container">
          <PostItem img={projectImage1}/>
          <PostItem img={projectImage2}/>
          <PostItem img={projectImage3}/>
          <PostItem img={projectImage4}/>
          <PostItem img={projectImage5}/>
          <PostItem img={projectImage6}/>
        </div>
      </section>
      <section className="Testimonial">
        <div className="section-heading">
          <div className="portfolio-title">
            <h6><Portfolio>Testimonial </Portfolio></h6>
            <h3><Portfolio2>Client&#x27;s Kind Word</Portfolio2></h3>
          </div>
        </div>
        <div className="post2-container">
          <PostItem2 img={avatar2}/>
          <PostItem2 img={avatar3}/>
          <PostItem2 img={avatar4}/>


        </div>
      </section>
    </div>
  );
}

export default App;
