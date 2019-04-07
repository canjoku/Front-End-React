import { Component } from 'react'
import Link from 'next/link'

class Navbar extends Component {
  render () {
    return (
      <nav className='c-navbar'>
          <Link href='/index'><a className='c-navbar__link'>Home</a></Link>
          <Link href='/about'><a className='c-navbar__link'>About</a></Link>
          <Link href='/projects'><a className='c-navbar__link'>Projects</a></Link>
          <Link href='/articles'><a className='c-navbar__link'>Articles</a></Link>
      </nav>
    )
  }
}

export default Navbar




