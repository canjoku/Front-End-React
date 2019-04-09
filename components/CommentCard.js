import { Component } from 'react'

class CommentCard extends Component {

  render () {
    const {comment} = this.props
    return (
      <>
        <p>{comment.body}</p>
        <p>{comment.name}</p>
        <img src={comment.picture}/>
      </>
    )
  }
}

export default CommentCard