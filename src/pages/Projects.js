import React, { Component } from 'react';
import Title from '../components/Title';
import Card from '../components/ProjectCard';
import projects from '../utils/projects.json';

class Projects extends Component {

  componentDidMount() {
    const M = window.M
    var elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems, {});
  }

  render() {
    return (
      <main>
      <div className="section">
          <div className="row container">
            <Title>
              <h1 style={{ color:"grey", fontStyle: "italic", textAlign:'left'}}>Projects</h1>
            </Title>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax"><img alt="random" src="https://image.freepik.com/free-photo/digital-code-number-abstract-technology-background_34663-74.jpg" /></div>
        </div>
        <div className="section">
          <div className="row">
            <Card 
              title={projects[0].name}
              description={projects[0].description}
              image={projects[0].image}
              github={projects[0].git}
              heroku={projects[0].site}
            />
            <Card 
              title={projects[1].name}
              description={projects[1].description}
              image={projects[1].image}
              github={projects[1].git}
              heroku={projects[1].site}
            />
          </div>
          <div className="row">
            <Card 
              title={projects[2].name}
              description={projects[2].description}
              image={projects[2].image}
              github={projects[2].git}
              heroku={projects[2].site}
            />
            <Card 
              title={projects[3].name}
              description={projects[3].description}
              image={projects[3].image}
              github={projects[3].git}
              heroku={projects[3].site}
            />
          </div>
          <div className="row">
            <Card 
              title={projects[4].name}
              description={projects[4].description}
              image={projects[4].image}
              github={projects[4].git}
              heroku={projects[4].site}
            />
            <Card 
              title={projects[5].name}
              description={projects[5].description}
              image={projects[5].image}
              github={projects[5].git}
              heroku={projects[5].site}
            />
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax"><img alt="random" src="https://image.freepik.com/free-photo/digital-code-number-abstract-technology-background_34663-74.jpg" /></div>
        </div>
      </main>
    )
  }
}

export default Projects;