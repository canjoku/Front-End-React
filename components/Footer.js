import { Component } from 'react'
import Link from 'next/link'



class Footer extends Component {
  render () {
    return (
        <footer className='c-footer'>
          <div className='c-footer__container'>
            <div className='c-footer__container-item'>
              <div className='c-footer__navigation'>
                <ul className='c-footer__list'>
                  <li className='c-footer__item'><Link href='/index'><a className='c-footer__link'>Home</a></Link></li>
                  <li className='c-footer__item'><Link href='/about'><a className='c-footer__link'>About</a></Link></li>
                  <li className='c-footer__item'><Link href='/articles'><a className='c-footer__link'>Articles</a></Link></li>
                  <li className='c-footer__item'><Link href='/projects'><a className='c-footer__link'>Projects</a></Link></li>
                </ul>
              </div>
            </div>
            <div className='c-footer__container-item'>
              <p className='c-footer__copyright'>
                Built by <Link href='/about'><a className='c-footer__link'>Chidi Njoku</a></Link>. A Portfolio website showcasing web development projects and code related articles. Copyright &copy; by Chidi Njoku. Credit to the original author, Chidi Njoku, is of course highly appreciated!
              </p>
            </div>
          </div>
        </footer>
    )
  }
}

export default Footer
