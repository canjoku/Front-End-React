import { Component } from 'react'
import Link from 'next/link'


class PostCard extends Component {

  render () {
    const { post } = this.props
    return (
      <div className="about-info">
      <Link href={`/showPost?slug=${post.slug}`} as={`/posts/${post.slug}`}>
        <a> 
        <div className="job job-1">
            <h3>{post.title}</h3>
          </div>
        </a>
      </Link>
      </div>
    )
  }
}

export default PostCard

