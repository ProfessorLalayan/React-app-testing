import React from 'react';
import Counter from './components/Counter';
import './Styles/App.css';
import PostItem from './components/PostItem';
import PostItem2 from './components/PostItem2';

import projectImage1 from './assets/img/project-1.jpg'; 
import projectImage2 from './assets/img/project-2.jpg'; 
import projectImage3 from './assets/img/project-3.jpg'; 
import projectImage4 from './assets/img/project-4.jpg'; 
import projectImage5 from './assets/img/project-5.jpg'; 
import projectImage6 from './assets/img/project-6.jpg'; 
import avatar2 from './assets/img/avatar-2.jpg'; 
import avatar3 from './assets/img/avatar-3.jpg'; 
import avatar4 from './assets/img/avatar-4.jpg'; 



function App() {
  return (
    <div className="App">
      <section className="portfolio">
        <div className="section-heading">
          <div className="portfolio-title">
            <h6><span>Portfolio</span></h6>
            <h3><span>Latest Projects</span></h3>
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
            <h6><span>Testimonial </span></h6>
            <h3><span>Client&#x27;s Kind Word</span></h3>
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
