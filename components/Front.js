import { Component } from 'react'
import SubscriptionForm from './SubscriptionForm'

class Front extends Component {
  render () {
    const {mutation} = this.props
    return (
      <SubscriptionForm mutation={mutation}/>
    )
  }
}

export default Front