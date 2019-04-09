import { Component } from 'react'
import Link from 'next/link'


class PostCard extends Component {

  render () {
    const { post } = this.props
    return (
      <>
      <section className='c-post-card__my-post-summary'>
        <div className='c-post-card__container'>
          <h1 className='u-custom-font'>Ruby</h1>
          <p>{post.title}
            <Link href={`/showPost?slug=${post.slug}`} as={`/posts/${post.slug}`}><a className='u-btn u-btn-info'>Learn More</a></Link>
          </p>
        </div>
      </section>
      </>
    )
  }
}

export default PostCard