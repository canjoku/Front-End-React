import { Component } from 'react'

class About extends Component {
  render () {
    return (
      <section className='c-about-section'>
        <div className='u-center-text u-bottom-margin-small'>
          <h2 className='c-about-section__primary-heading'>
            About Me
          </h2>
        </div>
        <div className='g-grid__row'>
          <div className='g-grid__col-1-of-2'>
            <div className='c-about-section__about-me'>
              <h3 className='c-about-section__tertiary-heading u-bottom-margin-small'>I'm Chidi Njoku and I'm a full stack web developer</h3>
              <p className='u-bottom-margin-medium'>
                I am a passionate and talented developer. I posess strong coding,
                technical, problem solving abilities and a knack for writting clean, readable code. I am the kind of guy who goes
                beyond the routine and likes to do a little bit of everything. I am committed to collaborative
                problem solving, building quality products and sophisticated design.
              </p>
              <h3 className='c-about-section__tertiary-heading'>Summary of Skills</h3>
              <ul className='c-about-section__list'>
                <li className='c-about-section__item'>Experience with Ruby on Rails</li>
                <li className='c-about-section__item'>Solid understanding of SQL</li>
                <li className='c-about-section__item'>Experince with AWS and Docker containers</li>
                <li className='c-about-section__item'>Experince with Test-Driven Development (TDD), specifically Rspec/Capybara and Jest/Enzyme</li>
                <li className='c-about-section__item'>Experience with conitnuous integration</li>
                <li className='c-about-section__item'>Experience with GraphQl, React.js</li>
              </ul>
            </div>
          </div>
          <div className='g-grid__col-1-of-2'>
            <div className='c-image-composition'>
              <img src='/static/images/pic22.jpg' alt='photo-1' className='c-image-composition__photo c-image-composition__photo--p1'></img>
              <img src='/static/images/pic6.jpg' alt='photo-2' className='c-image-composition__photo c-image-composition__photo--p2'></img>
              <img src='/static/images/pic20.jpg' alt='photo-3' className='c-image-composition__photo c-image-composition__photo--p3'></img>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About