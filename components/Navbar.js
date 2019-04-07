import { Component } from 'react'
import Link from 'next/link'

class Navbar extends Component {
  render () {
    return (
      <nav className='clearfix'>
        <Link href='/index'><a>Home</a></Link>
        <Link href='/about'><a>About</a></Link>
        <Link href='/projects'><a>Projects</a></Link>
        <Link href='/articles'><a>Articles</a></Link>
      </nav>       
    )
  }
}

export default Navbar




