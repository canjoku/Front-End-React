import { Component } from 'react'

import PostCard from '../components/PostCard'


class Articles extends Component {

  render () {
    const { posts } = this.props
    return (
      <div className='c-articles'>
        <h1 className='c-articles__primary-heading'>Articles</h1>
        <div className='g-grid__row'>
          { posts.map((post, index) => {
            return(
              <div key={index} className='g-grid__col-1-of-3'>
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