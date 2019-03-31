import { Component } from 'react'
import Link from 'next/link'


class PostCard extends Component {

  render () {
    const { post } = this.props
    return (
      <div className='c-post-card'>
        <span className='c-post-card__icon'><i className='icon-basic-mail-open'></i></span>
        <h5 className='c-post-card__text'>
          <Link href={`/showPost?slug=${post.slug}`} as={`/posts/${post.slug}`}>
            <a className='c-post-card__link'>{post.title}</a>
          </Link>
        </h5>
      </div>
    )
  }
}

export default PostCard

