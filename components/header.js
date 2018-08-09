import { Component } from 'react'
import Link from 'next/link'

class Header extends Component {
  render () {
    return <div>
      <ul>
        <li><Link href='/index'><a>Home</a></Link></li>
        <li><Link href='/article'><a>Article</a></Link></li>
      </ul>
    </div>
  }
}

export default Header
