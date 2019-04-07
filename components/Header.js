import { Component } from 'react'
import Navbar from './Navbar'
import SubscriptionForm from './SubscriptionForm'

class Header extends Component {
  render () {
    const { mutation } = this.props
    return (
      <div>
        <Navbar />
        <div className='c-header'>
          <SubscriptionForm mutation={mutation}/>
        </div>
      </div>
    )
  }
}

export default Header
