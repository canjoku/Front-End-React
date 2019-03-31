import { Component } from 'react'
import Navbar from './Navbar'
import SubscriptionForm from './SubscriptionForm'

class Header extends Component {
  render () {
    const { mutation } = this.props
    return (
      <div>
      <Navbar />
      <header className="c-header">
        <div className='c-header__content'>
          <h1 className='c-header__primary-heading'>
            <span className='c-header__primary-heading--main'>Chidi Njoku</span>
            <span className='c-header__primary-heading--sub'>Full Stack Developer</span>
          </h1>
          <SubscriptionForm className='c-header__subscription-form' mutation={mutation}/>
        </div>
      </header>
      </div>
    )
  }
}

export default Header
