import { Component } from 'react'

import PostCard from '../components/PostCard'


class Articles extends Component {

  render () {
    const { posts } = this.props
    return (
      <div>
        { posts.map((post, index) => {
          return(
            <div key={index} >
              <PostCard post={post}/>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Articles