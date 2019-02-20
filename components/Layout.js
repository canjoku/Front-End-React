import { Component } from 'react'
import Head from 'next/head'

import Footer from '../components/Footer'
import Header from '../components/Header'

import '../scss/application.scss'

class Layout extends Component {
  render () {
    const { mutation } = this.props
    return (
      <div className='l-wrapper'>
        <Head>
          <title> TBlog </title>
          <link rel='stylesheet' href='/_next/static/style.css' />
        </Head>
        <Header mutation={mutation}/>
          { this.props.children }
        <Footer />
      </div>
    )
  }
}

export default Layout
