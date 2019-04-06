import { Component } from 'react'
import Navbar from './Navbar'
import SubscriptionForm from './SubscriptionForm'

class Header extends Component {
  render () {
    const { mutation } = this.props
    return (
      <div>
      <Navbar />
      <header>
          <SubscriptionForm mutation={mutation}/>
      </header>
      </div>
    )
  }
}

export default Header
