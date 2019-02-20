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
        <form onSubmit={(e) => this.submitSubscriber(e, mutation)}>
          <input name="email" placeholder="Enter Valid Email"/>
          <button>Subscribe</button>
        </form>
        <div>
          {this.showSubscribeStatus()}
        </div>
      </div>
    )
  }
}

export default SubscriptionForm