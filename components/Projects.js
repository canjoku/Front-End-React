import { Component } from 'react'

class Projects extends Component {
  render () {
    return (
      <section className='c-projects-section'>
        <div className='u-center-text u-bottom-margin-small'>
          <h2 className='c-projects-section__primary-heading'>
            Projects
          </h2>
        </div>
        <div className='g-grid__row'>
          <div className='g-grid__col-1-of-3'>
            <div className='c-projects-card'>
              <div className='c-projects-card__side c-projects-card__side--front'>
                <div className='c-projects-card__picture c-projects-card__picture--1'>&nbsp;</div>
                <h4 className='c-projects-card__heading'>
                  <span className='c-projects-card__heading-span c-projects-card__heading-span--1'>
                    Ruby on Rails GRAPHQL API App
                  </span>
                </h4>
                <div className='c-projects-card__details'>
                  <ul>
                    <li>Testing: RSpec/Capybara</li>
                    <li>Continuous Integration</li>
                    <li>Amazon Web Services</li>
                    <li>Containerisation</li>
                    <li>GraphQL Implementation</li>
                  </ul>
                </div>
              </div>
              <div className='c-projects-card__side c-projects-card__side--back c-projects-card__side--back1'>
                <div className='c-projects-card__cta'>
                  <p className='c-projects-card__cta-text'>Ruby Project</p>
                  <a href='https://github.com/affinity-digital-ltd/Tonys-blog' target='blank' className='c-projects-card__cta-link'><i className="icon-basic-server2"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className='g-grid__col-1-of-3'>
            <div className='c-projects-card'>
              <div className='c-projects-card__side c-projects-card__side--front'>
                <div className='c-projects-card__picture c-projects-card__picture--2'>&nbsp;</div>
                <h4 className='c-projects-card__heading'>
                  <span className='c-projects-card__heading-span c-projects-card__heading-span--2'>
                    Server Side Rendered ReactJS App
                  </span>
                </h4>
                <div className='c-projects-card__details'>
                  <ul>
                    <li>Ruby GraphQL</li>
                    <li>Node 10, NextJS, ReactJS</li>
                    <li>Jest/Enzyme Tests</li>
                    <li>Apollo Implementation</li>
                    <li>Auth0</li>
                  </ul>
                </div>
              </div>
              <div className='c-projects-card__side c-projects-card__side--back c-projects-card__side--back2'>
                <div className='c-projects-card__cta'>
                  <p className='c-projects-card__cta-text'>React Project</p>
                  <a href='https://github.com/affinity-digital-ltd/TBlog-FrontEnd' target='blank' className='c-projects-card__cta-link'><i className="icon-basic-link"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className='g-grid__col-1-of-3 '>
            <div className='c-projects-card'>
              <div className='c-projects-card__side c-projects-card__side--front'>
                <div className='c-projects-card__picture c-projects-card__picture--3'>&nbsp;</div>
                <h4 className='c-projects-card__heading'>
                  <span className='c-projects-card__heading-span c-projects-card__heading-span--3'>
                    Shift Commerce Platform
                  </span>
                </h4>
                <div className='c-projects-card__details'>
                  <ul>
                    <li>Production ready code</li>
                    <li>Stand Ups</li>
                    <li>Commercial Team Experience</li>
                    <li>Web platform implementation</li>
                  </ul>
                </div>
              </div>
              <div className='c-projects-card__side c-projects-card__side--back c-projects-card__side--back3'>
                <div className='c-projects-card__cta'>
                  <p className='c-projects-card__cta-text'>Commercial Experience</p>
                  <a href='#' className='c-projects-card__cta-link'><i className="icon-basic-webpage-multiple"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Projects