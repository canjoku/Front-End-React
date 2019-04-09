import { Component } from 'react'

class Footer extends Component {
  render () {
    return (
      <footer>
        <div className='c-footer__texts'>
          <h4>Links</h4>
          <div className='c-footer__text'>
            <h5>A Link <br></br>
            Copyright &copy; 2019
            </h5>
          </div>
        </div>

        <div className='c-footer__number'>
          <h4>07378889112</h4>
          <div className='c-footer__email'>
            <h5>Email <br></br>
              ca.njoku@yahoo.com
            </h5>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
