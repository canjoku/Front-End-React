import { Component } from 'react'
import Link from 'next/link'

import Layout from '../components/layout'

class Index extends Component {
  render () {
    return (
      <Layout {...this.props}>
        <h1>Index Page</h1>
        <p>all articles listed here</p>
      </Layout>
    )
  }
}

export default Index
