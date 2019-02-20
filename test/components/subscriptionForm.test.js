import SubscriptionForm from '../../components/SubscriptionForm'

test('<SubscriptionForm /> renders correctly', () => {
  const component = shallow(<SubscriptionForm />)
  expect(component).toMatchSnapshot()
})
