import { Component } from 'react'

class CommentCard extends Component {

  render () {
    const {comment} = this.props
    return (
      <div>
        <p>{comment.body}</p>
        <p>{comment.name}</p>
        <img src={comment.picture}/>
      </div>
    )
  }
}

export default CommentCard