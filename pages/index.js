import { Component } from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import withData from '../lib/withData'

import PostCard from '../components/PostCard'
import Layout from '../components/Layout'
import Skeleton from '../components/Skeleton'


class Index extends Component {
  constructor (props) {
    super(props)

    this.state = {
      visible: true
    }

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

  toggleState () {
    this.setState({
      visible: false
    })
  }

  componentWillMount () {
    this.toggleState();
  }

  render () {
    return <Query query={this.postsQuery}>
    {({ loading, error, data: { posts } }) => {
      if (loading) return <Layout><p>Loading Data ...</p></Layout>
      if (error) return <Layout><p>Error retrieving Data ... </p></Layout>
      return(
        <Mutation mutation={this.createSubscriber} >
        {(newSubscriber) => {
          return <Layout {...this.props} mutation={newSubscriber}>
            { posts.map((post, index) => {
              return(
                this.state.visible ?
                  <Skeleton count={3}/>:
                  <PostCard key={index} post={post}/>
              )
            })}
          </Layout>
        }}
        </Mutation>
      )
    }}
    </Query>
  }
}

export default withData(Index)