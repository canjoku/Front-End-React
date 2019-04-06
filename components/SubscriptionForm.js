import { Component } from 'react'


class SubscriptionForm extends Component {
  constructor(props){
    super(props)
    this.submitSubscriber = this.submitSubscriber.bind(this)
    this.state = {
      subscribed: false
    }
  }

  submitSubscriber (e, mutation) {
    e.preventDefault()
    const form = e.target
    mutation({
      variables: {
        subscriber: {
          email: form.email.value
        }
      }
    }).
    then(({data}) => {this.setState({subscribed: data.createSubscriber.email})}).
    catch(({error})=>{console.log('got error',error)})
    form.reset()
  }

  showSubscribeStatus () {
    if (this.state.subscribed) {
      return (
        <div>Your email {this.state.subscribed} has been succcesfully submitted..</div>
      )
    }
  }
  render () {
    const { mutation } = this.props
    return (
      <div>
        <h3>Subscribe</h3>
        <p>Enter email below to subscribe for email notifications</p>
        <form onSubmit={(e) => this.submitSubscriber(e, mutation)}>
          <input placeholder= 'Email Address' name="email" type='email'/>
          <button><i className="icon-basic-mouse"></i></button>
        </form>
        <div>
          {this.showSubscribeStatus()}
        </div>
      </div>
    )
  }
}

export default SubscriptionForm