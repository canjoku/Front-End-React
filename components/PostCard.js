import { Component } from 'react'
import Link from 'next/link'


class PostCard extends Component {

  render () {
    const { post } = this.props
    return (
      <div className='l-posts'>
        <div className='c-post'>
          <h1 className='c-post__title'>
            <Link href={`/showPost?slug=${post.slug}`} as={`/posts/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </h1>
        </div>
      </div>
    )
  }
}

export default PostCard

