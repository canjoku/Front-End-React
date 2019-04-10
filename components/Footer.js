import { Component } from 'react'
import Link from 'next/link'


class Footer extends Component {
  render () {
    return (
      <footer>
        <div className='c-footer__texts'>
          <h4>Links</h4>
          <div className='c-footer__text'>
            <h5><a href='#c-project__my-ruby-project-summary'>Projects</a> <br></br>
            <Link href='/articles#post-cards'><a>Articles</a></Link>
            </h5>
          </div>
        </div>

        <div className='c-footer__number'>
          <h4>07378889112</h4>
          <div className='c-footer__email'>
            <h5>ca.njoku@yahoo.com<br></br>
            Copyright &copy; 2019
            </h5>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
