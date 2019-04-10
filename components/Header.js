import { Component } from 'react'
import Navbar from './Navbar'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      overlay: true
    }
    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render () {
    const activeMenu = this.state.active && 'c-header__active'
    const menuOpen = this.state.active && 'c-nav__menu-open'
    const overlay = this.state.overlay && 'c-nav__overlay'
    return (
      <header id='c-header__home'>
        <div className={`c-header__menu ${activeMenu}`} onClick={this.toggleNav}>
          <span className='c-header__bar'></span>
        </div>
        <Navbar menuOpen={menuOpen} overlay={overlay} />
        <div className='c-header__main-text'>
          <h1>Chidi Njoku</h1>
          <h2>Full stack</h2>
          <div>{this.state.here}</div>
          <a className='u-btn u-main-btn'>Developer</a>
        </div>
      </header>
    )
  }
}

export default Header
