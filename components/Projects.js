import { Component } from 'react'

class Projects extends Component {
  render () {
    return (
      <main>
        <h1 className="lg-heading">My<span class="text-secondary">Projects</span></h1>
        <h2 className="sm-heading">Some of my projects...</h2>

        <div className="about-info">

          <div className="job job-1">
            <h3>BACKEND GRAPHQL API</h3>
            <h6>Ruby on Rails</h6>
            <p>A full stack RESTful CRUD application using the MVC pattern. This project implemented a blog, an admin panel and a graphql api.
            </p>
              <ul>
                <li>Testing: RSpec/Capybara</li>
                <li>Continuous Integration</li>
                <li>Amazon Web Services</li>
                <li>Containerisation</li>
                <li>GraphQL Implementation</li>
              </ul>
              <a href='https://github.com/affinity-digital-ltd/Tonys-blog' target='blank'>See Github</a>
          </div>

          <div className="job job-2">
            <h3>FrontEnd JS APP</h3>
            <h6>Server Side Rendered ReactJS</h6>
            <p>Server Side Rendered React application using NextJS.</p>
              <ul>
                <li>Ruby GraphQL</li>
                <li>Node 10, NextJS, ReactJS</li>
                <li>Jest/Enzyme Tests</li>
                <li>Apollo Implementation</li>
                <li>Auth0</li>
                <li>Yarn, Webpack</li>
              </ul>
              <a href='https://github.com/affinity-digital-ltd/TBlog-FrontEnd' target='blank'>See Github</a>
          </div>

          <div className="job job-3">
            <h3>Commercial</h3>
            <h6>&#64;Shift Commerce, Leeds</h6>
            <p>Collaborated with a team of seasoned developers at Shift Commerce to get the new Shift reference site production ready.</p>
              <ul>
                <li>Production ready code</li>
                <li>Stand Ups</li>
                <li>Commercial Team Experience</li>
                <li>Web platform implementation</li>
              </ul>
          </div>
        </div>
      </main>
    )
  }
}

export default Projects