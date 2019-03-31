import { Component } from 'react'

import Markdown from 'markdown-to-jsx'

class PostSection extends Component {
  render () {
    const { body, createdAt, title} = this.props.post
    return (
      <div className='c-post-section'>
        <h1 className='c-post-section__primary-heading u-bottom-margin-medium '>{title}</h1>
        <p className='c-post-section__body u-bottom-margin-medium'><Markdown>{body}</Markdown></p>
      </div>
    )
  }
}

export default PostSection