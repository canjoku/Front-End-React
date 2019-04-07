import { Component } from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import withData from '../lib/withData'


import Layout from '../components/Layout'
import PostSection from '../components/PostSection'
import CommentsSection from '../components/CommentsSection'
import Skeleton from '../components/Skeleton'


class ShowPostPage extends Component {
  constructor (props) {
    super(props)

    this.postsQuery = gql`
      query post($slug: String!){
        post (slug:$slug) {
          title
          avatarUrl
          createdAt
          body
          comments {
            name
            picture
            body
            createdAt
          }
        }
      }
    `
    this.createComment = gql`
      mutation createComment($comment: CommentInput!) {
        createComment (comment:$comment) {
          id
          name
          picture
          body
        }
      }
    `
  }

  render () {
    return <Query query={this.postsQuery} variables={{slug: this.props.url.query.slug}}>
    {({ loading, error, data: { post } }) => {
      if (loading) return <Layout><Skeleton count={5} /></Layout>
      if (error) return <Layout><p>Error :({console.log(error)}</p></Layout>
      return(<Layout>
        <div>
          <PostSection post={post}/>
          <Mutation mutation={this.createComment}
            update={(cache, { data: { newComment } }) => {
              const updatedPost = Object.assign({}, post, { comments: post.comments.concat([newComment]) })
              cache.writeQuery({
                query: this.postsQuery,
                varaiables: {slug: this.props.url.query.slug},
                data: { post: updatedPost}
              })
            }}
          >
            {(newComment) => {
              return <CommentsSection comments={post.comments} slug={this.props.url.query.slug} mutation={newComment} />
            }}
          </Mutation>
        </div>
        </Layout>
      )
    }}
    </Query>
  }
}

export default withData(ShowPostPage)


