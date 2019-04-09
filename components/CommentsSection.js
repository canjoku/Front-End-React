import { Component } from 'react'
import CommentsForm from './CommentsForm'
import CommentCard from './CommentCard'
import Auth from '../lib/Auth'

class CommentsSection extends Component {
  constructor(props){
    super(props)
    this.auth = new Auth()
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  login () {
    this.auth.login()
  }

  logout () {
    this.auth.logout()
    window.location.reload()
  }

  render () {
    const { comments, mutation, slug } = this.props
    if (this.auth.isAuthenticated()){
      return(
        <div className='c-comments-section'>
          <a className='c-comments-section__cta-link' onClick={this.logout}>Logout</a>
          <CommentsForm mutation={mutation} slug={slug} />
          {comments.map((comment, index) => {
            return(
              <CommentCard key={index} comment={comment} />
            )
          })}
        </div>
      )
    } else {
      return(
        <section>
          <p>If you would like to leave a comment, then please login</p>
          <a href='#' className='c-comments-section__cta-link' onClick={this.login}>Login</a>
          {comments.map((comment, index) => {
            return(
              <CommentCard key={index} comment={comment} />
            )
          })}
        </section>
      )
    }
  }
}

export default CommentsSection


