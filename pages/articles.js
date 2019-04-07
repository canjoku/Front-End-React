import { Component } from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import withData from '../lib/withData'

import Articles from '../components/Articles'
import Layout from '../components/Layout'
import Skeleton from '../components/Skeleton'


class ArticlesPage extends Component {
  constructor (props) {
    super(props)

    this.postsQuery = gql`
      {
        posts {
          id
          title
          slug
        }
      }
    `
  }

  render () {
    return <Query query={this.postsQuery}>
    {({ loading, error, data: { posts } }) => {
      if (loading) return <Layout><Skeleton count={3}/></Layout>
      if (error) return <Layout><p>Error retrieving Data ... </p></Layout>
      return(
        <Layout>
          <Articles posts = { posts }/>
        </Layout>
      )
    }}
    </Query>
  }
}

export default withData(ArticlesPage)


