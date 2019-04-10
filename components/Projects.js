import { Component } from 'react'

class Projects extends Component {
  render () {
    return (
      <>
        <section className='c-project__my-ruby-project u-between-sec' id='c-project__my-ruby-project-summary'>
          <h1 className='u-custom-font'>Ruby on Rails</h1>
          <h2 className='u-custom-font-secondary u-between-sec-color'>Project</h2>
        </section>

        <section className='c-project__my-ruby-project-summary'>
          <div className='c-project__container'>
            <h1 className='u-custom-font'>Ruby</h1>
            <p>A full stack RESTful CRUD application using the MVC pattern.
              <a href='https://github.com/affinity-digital-ltd/Tonys-blog' target='blank' className='u-btn u-btn-info'>Learn More</a>
            </p>
          </div>
        </section>

        <section className='c-project__my-react-project u-between-sec'>
          <h1 className='u-custom-font'>ReactJS</h1>
          <h2 className='u-custom-font-secondary u-between-sec-color'>Project</h2>
        </section>

        <section className='c-project__my-react-project-summary' id='c-project__my-react-project-summary'>
          <div className='c-project__container'>
            <h1 className='u-custom-font'>ReactJS</h1>
            <p>
              A server-side rendered ReactJS application.
              <a href='https://github.com/affinity-digital-ltd/TBlog-FrontEnd' target='blank' className='u-btn u-btn-info'>Learn More</a>
            </p>
          </div>
        </section>
      </>
    )
  }
}

export default Projects


