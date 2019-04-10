import { Component } from 'react'

import PostCard from '../components/PostCard'


class Articles extends Component {

  render () {
    const { posts } = this.props
    return (
      <>
        { posts.map((post, index) => {
          return(
            <section key={index} id='post-cards'>
              <PostCard post={post}/>
            </section>
          )
        })}
      </>
    )
  }
}

export default Articles




