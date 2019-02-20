import CommentsForm from '../../components/CommentsForm'

test('<CommentsForm /> renders correctly', () => {
  const component = shallow(<CommentsForm />)
  expect(component).toMatchSnapshot()
})
