import { Component } from 'react'
import Navbar from './Navbar'

class Header extends Component {
  render () {
    const { mutation } = this.props
    return (
      <header className="c-header">
        <div className="c-header__content">
          <h1 className="c-header__title">TBlog Stories</h1>
          <div className="c-header_subtitle">
            <div className="c-header__description">
              A place to read about web development code stories. Courtesy of <a href="#">Tony Njoku.</a>
              <Navbar mutation={mutation}/>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
