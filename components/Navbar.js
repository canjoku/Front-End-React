import { Component } from 'react'
import Link from 'next/link'
import SubscriptionForm from './SubscriptionForm'

class Navbar extends Component {
  render () {
  const { mutation } = this.props
    return (
      <div className='c-links'>
        <Link href='/index'><a className='c-links__item c-links__item--current'>Blog Home</a></Link>
        <Link href='/projects'><a className='c-links__item'>Projects</a></Link>
        <Link href='/about'><a className='c-links__item'>About</a></Link>
        <SubscriptionForm mutation = {mutation}/>
      </div>
    )
  }
}

export default Navbar