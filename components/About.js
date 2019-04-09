import { Component } from 'react'

class About extends Component {
  render () {
    return (
      <>
        <section className='c-about__my-story' id='c-about__story'>
          <div className='c-about__container'>
            <div className='u-center u-add-padding-right'>
              <h1 className='u-custom-font'>About Me</h1>
              <h2 className='u-custom-font-secondary'>Bio</h2>
              <p>I am a passionate and talented developer. I posess strong coding,
                technical, problem solving abilities and a knack for writting clean, readable code. I am the kind of guy who goes
                beyond the routine and likes to do a little bit of everything. I am committed to collaborative
                problem solving, building quality products and sophisticated design.
              </p>
              <a href='#' className='u-btn u-btn-info'>Learn More</a>
            </div>
            <div className='c-about__pic u-add-flex'></div>
          </div>
        </section>

        <section className='c-about__my-backend u-between-sec'>
          <h1 className='u-custom-font'>Ruby on</h1>
          <h2 className='u-custom-font-secondary u-between-sec-color'>Rails</h2>
        </section>

        <section className='c-about__mybackend-skills' id='c-about__my-backend-skills'>
          <div className='c-about__container'>
            <div className='u-center u-second'>
              <h1 className='u-custom-font'>Backend</h1>
              <h2 className='u-custom-font-secondary'>Skills</h2>
              <p>
                <ul>
                  <li>Experience with Ruby on Rails</li>
                  <li>Solid understanding of SQL</li>
                  <li>Writing Unit, Integration and Feature specs</li>
                  <li>Using background workers and service classes</li>
                </ul>
              </p>
              <a href='#' className='u-btn u-btn-info'>Advanced Skills</a>
            </div>
            <div className='c-image-group u-add-flex u-add-padding-right u-first'>
              <img src='../static/images/web.jpg'></img>
              <img src='../static/images/articles.jpg'></img>
              <img src='../static/images/head-image.jpeg'></img>
              <img src='../static/images/html.jpg'></img>
            </div>
          </div>
        </section>

      <section className='c-about__my-front-end u-between-sec'>
        <h1 className='u-custom-font'>ReactJS</h1>
        <h2 className='u-custom-font-secondary u-between-sec-color'>NextJS</h2>
      </section>

      <section className='c-about__my-front-end-skills' id='c-about__my-front-end-skills'>
        <div className='c-about__container'>
          <div className='u-center u-add-padding-right'>
            <h1 className='u-custom-font'>Front End</h1>
            <h2 className='u-custom-font-secondary'>Skills</h2>
            <p>
              <ul>
                <li>ReactJS</li>
                <li>Higher Order Components</li>
                <li>SCSS/SASS, BEM implementation</li>
                <li>Experience with (TDD), specifically Jest/Enzyme</li>
              </ul>
            </p>
            <a href='#' className='u-btn u-btn-info'>Learn More</a>
          </div>
          <div className='c-about__pic2 u-add-flex'></div>
        </div>
      </section>
      </>
    )
  }
}

export default About



