import { Component } from 'react'
import Link from 'next/link'

class Navbar extends Component {
  render () {
    return (
      <header>
        <div className="menu-btn">
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>

        <div className="menu">
          <div className="menu-branding">
            <div className="portrait"></div>
          </div>
          <ul className="menu-nav">
            <li className="nav-item current">
              <a class="nav-link">
                <Link href='/index'>Home</Link>
              </a>
            </li>
            <li className="nav-item">
              <a class="nav-link">
                <Link href='/about'>About Me</Link>
              </a>
            </li>
            <li className="nav-item">
              <a href="work.html" class="nav-link">
                <Link href='/projects'>My Work</Link>
              </a>
            </li>
            <li className="nav-item">
              <a class="nav-link">
                <Link href='/articles'>Articles</Link>
              </a>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}

export default Navbar




