import { Component } from 'react'

import Markdown from 'markdown-to-jsx'

class PostSection extends Component {
  render () {
    const { body, createdAt, title} = this.props.post
    return (
      <div>
        <h1>{title}</h1>
        <p><Markdown>{body}</Markdown></p>
      </div>
    )
  }
}

export default PostSection