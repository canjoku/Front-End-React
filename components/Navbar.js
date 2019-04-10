import { Component } from 'react'
import Link from 'next/link'

class Navbar extends Component {
  constructor(props) {
    super(props)
 
    this.renderwithBack = this.renderWithBack.bind(this)
  }

  renderWithBack = () => {
    return (
      <nav className='c-nav'>
      <Link href='/index'><a className='c-nav__logo'>Chidi</a></Link>
        <div className={`${this.props.overlay} ${this.props.menuOpen}`}>
          <ul>
            <li><Link href='/index'><a>Home</a></Link></li>
            <li><a href='#c-about__story'>About</a></li>
            <li><a href='#c-project__my-ruby-project-summary'>Projects</a></li>
            {/*<li><Link href='/articles#post-cards'><a target='blank'>Articles</a></Link></li>*/}
          </ul>
        </div> 
      </nav>
    )
  }
  render () {
    return (
      <>{this.renderWithBack()}</>
    )
  }
}

export default Navbar




