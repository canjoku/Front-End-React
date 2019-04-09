import { Component } from 'react'
import Head from 'next/head'


import Header from '../components/Header'
import Footer from '../components/Footer'
import '../scss/application.scss'



class Layout extends Component {
  render () {
    const { mutation } = this.props
    return (
      <div>
        <Head>
          <title>Welcome To My Portfolio</title>
          <link rel='stylesheet' href='/_next/static/style.css' />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className='c-layout'>
          <Header mutation={mutation}/>
            { this.props.children }
          <Footer />
        </div>
      </div>
    )
  }
}

export default Layout
