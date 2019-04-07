import { Component } from 'react'
import Link from 'next/link'

class Navbar extends Component {
  render () {
    return (
      <div className='c-navbar'>
        <input type='checkbox' className='c-navbar__checkbox' id='nav-toggle'/>
        <label for='nav-toggle' className='c-navbar__button' >
          <span className='c-navbar__icon'></span>
        </label>
        <div className='c-navbar__background'></div>
        <nav className='c-navbar__nav'>
          <ul className='c-navbar__list'>
            <li className='c-navbar__item'><Link href='/index'><a className='c-navbar__link'>Home</a></Link></li>
            <li className='c-navbar__item'><Link href='/about'><a className='c-navbar__link'>About<a/></a></Link></li>
            <li className='c-navbar__item'><Link href='/projects'><a className='c-navbar__link'>Projects</a></Link></li>
            <li className='c-navbar__item'><Link href='/articles'><a className='c-navbar__link'>Articles</a></Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar




