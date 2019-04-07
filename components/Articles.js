import { Component } from 'react'

import PostCard from '../components/PostCard'


class Articles extends Component {

  render () {
    const { posts } = this.props
    return (
      <main>
        <h1 className="lg-heading">My<span class="text-secondary">Articles</span></h1>
        <h2 className="sm-heading">Some of my writtings...</h2>
        { posts.map((post, index) => {
          return(
            <div key={index} >
              <PostCard post={post}/>
            </div>
          )
        })}
      </main>
    )
  }
}

export default Articles




