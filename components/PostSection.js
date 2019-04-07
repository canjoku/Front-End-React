import { Component } from 'react'

import Markdown from 'markdown-to-jsx'

class PostSection extends Component {
  render () {
    const { body, createdAt, title} = this.props.post
    return (
      <main>
        <div className='c-post-section'>
          <h1 className='c-post-section__primary-heading'>{title}</h1>
          <p classsName='c-post-section__body'><Markdown>{body}</Markdown></p>
        </div>
      </main>
    )
  }
}

export default PostSection