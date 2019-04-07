import { Component } from 'react'

class About extends Component {
  render () {
    return (
      <main>
        <h1 className="lg-heading">About<span class="text-secondary">Me</span></h1>
        <h2 className="sm-heading">Let me tell you a few things...</h2>

        <div className="about-info">
          <img src="../static/images/pic24.jpg" alt="Chidi Njoku" className="bio-image"/>

          <div className="bio">
            <h3 className="text-secondary">BIO</h3>
            <p>I am a passionate and talented developer. I posess strong coding,
              technical, problem solving abilities and a knack for writting clean, readable code. I am the kind of guy who goes
              beyond the routine and likes to do a little bit of everything. I am committed to collaborative
              problem solving, building quality products and sophisticated design.
            </p>
          </div>

          <div className="job job-1">
            <h3>BackEnd</h3>
            <h6>Full Stack Developer</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis totam enim. Nesciunt porro dolores
              expedita dolor necessitatibus deserunt nemo.
            </p>
          </div>

          <div className="job job-2">
            <h3>FrontEnd</h3>
            <h6>Front End Developer</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis totam enim. Nesciunt porro dolores
              expedita dolor necessitatibus deserunt nemo.
            </p>
          </div>

          <div className="job job-3">
            <h3>Devops</h3>
            <h6>Graphic Designer</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis totam enim. Nesciunt porro dolores
              expedita dolor necessitatibus deserunt nemo.
            </p>
          </div>
        </div>
      </main>
    )
  }
}

export default About