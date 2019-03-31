import { Component } from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import withData from '../lib/withData'

import About from '../components/About'
import Articles from '../components/Articles'
import Projects from '../components/Projects'
import Layout from '../components/Layout'
import Skeleton from '../components/Skeleton'


class Index extends Component {
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
    this.createSubscriber = gql`
      mutation createSubscriber($subscriber: SubscriberInput!) {
        createSubscriber(subscriber:$subscriber) {
          email
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
        <Mutation mutation={this.createSubscriber} >
        {(newSubscriber) => {
          return <Layout {...this.props} mutation={newSubscriber}>
            <About />
            <Articles posts = { posts }/>
            <Projects />
          </Layout>
        }}
        </Mutation>
      )
    }}
    </Query>
  }
}

export default withData(Index)