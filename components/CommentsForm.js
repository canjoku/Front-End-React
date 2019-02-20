import { Component } from 'react'

class CommentsForm extends Component {
  constructor (props) {
    super(props)
    this.submitComment = this.submitComment.bind(this)
  }


  submitComment (e, mutation) {
    e.preventDefault()
    const form = e.target
    mutation({
      variables: {
        comment : {
          name: form.name.value,
          picture: form.picture.value,
          body: form.body.value,
          postSlug: this.props.slug
        }
      }
    })
    form.reset()
  }

  render () {
    const { mutation } = this.props
    return (
      <form onSubmit={(e) => this.submitComment(e, mutation)}>
        <input type="hidden" name="name" value={localStorage.getItem('user_name')}  />
        <input type= "hidden" name="picture" value={localStorage.getItem('user_picture')} />
        <input placeholder='Enter comment here' name="body" />
        <button>Submit</button>
      </form>
    )
  }
}

export default CommentsForm