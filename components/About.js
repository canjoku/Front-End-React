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
            <h3>BackEnd skills</h3>
            <ul>
              <li>Experience with Ruby on Rails</li>
              <li>Solid understanding of SQL</li>
              <li>Writing Unit, Integration and Feature specs</li>
              <li>Using background workers and service classes</li>
            </ul>
          </div>

          <div className="job job-2">
            <h3>FrontEnd skills</h3>
            <ul>
              <li>ReactJS</li>
              <li>Higher Order Components</li>
              <li>SCSS/SASS, BEM implementation</li>
              <li>Experience with (TDD), specifically Jest/Enzyme</li>
            </ul>
          </div>

          <div className="job job-3">
            <h3>Devop skills</h3>
            <ul>
              <li>Linux Fundamentals And Scripting</li>
              <li>Experince with AWS and Docker containers</li>
              <li>Experience with conitnuous integration</li>
              <li>Infrastructure as Code (IAC)</li>
            </ul>
          </div>
        </div>
      </main>
    )
  }
}

export default About