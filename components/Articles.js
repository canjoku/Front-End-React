import { Component } from 'react'

import PostCard from '../components/PostCard'


class Articles extends Component {

  render () {
    const { posts } = this.props
    return (
      <div className='c-articles'>
        <h1 className='c-articles__primary-heading'>Articles</h1>
        <div className='c-articles__posts-container'>
          { posts.map((post, index) => {
            return(
              <div key={index} className='c-articles__posts-container-item'>
                <PostCard post={post}/>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Articles