import { Component } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import '../scss/application.scss'
import Head from 'next/head'

class Layout extends Component {
  render () {
    return (
      <div className='container'>
        <Head>
          <link rel='stylesheet' href='/_next/static/style.css' />
          <title> TBlog </title>
        </Head>
        <Header />
        { this.props.children }
        <Footer />
      </div>
    )
  }
}

export default Layout
