import { Component } from 'react'

import Markdown from 'markdown-to-jsx'

class PostSection extends Component {
  render () {
    const { post } = this.props
    return (
      <div>
        <h1><Markdown>{post.title}</Markdown></h1>
        <p><Markdown>{post.body}</Markdown></p>
        <p><Markdown>{post.createdAt}</Markdown></p>
      </div>
    )
  }
}

export default PostSection
