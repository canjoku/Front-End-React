import { Component } from 'react'
import Link from 'next/link'


class PostCard extends Component {

  render () {
    const { post } = this.props
    return (
      <Link href={`/showPost?slug=${post.slug}`} as={`/posts/${post.slug}`}>
        <a> 
          <div>
            <span></span>
            <h5>
              {post.title}
            </h5>
          </div>
        </a>
      </Link>
    )
  }
}

export default PostCard

