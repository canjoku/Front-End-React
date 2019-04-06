import { Component } from 'react'
import Link from 'next/link'

class Navbar extends Component {
  render () {
    return (
      <nav className="nav">
        <input type="checkbox" class="nav__cb" id="menu-cb"/>
        <div className="nav__content">
          <ul className="nav__items">
            <li className="nav__item">
              <span className="nav__item-text">
                <Link href='/index'><a>Home</a></Link>
              </span>
            </li>
            <li className="nav__item">
              <span className="nav__item-text">
              <Link href='/about'><a>About</a></Link>
              </span>
            </li>
            <li className="nav__item">
              <span className="nav__item-text">
                <Link href='/projects'><a>Projects</a></Link>
              </span>
            </li>
            <li className="nav__item">
              <span className="nav__item-text">
                <Link href='/articles'><a>Articles</a></Link>
              </span>
            </li>
          </ul>
        </div>
        <label className="nav__btn" for="menu-cb"></label>
      </nav>
    )
  }
}

export default Navbar




