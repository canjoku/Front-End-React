import CommentsSection from '../../components/CommentsSection'
jest.mock('../../lib/Auth.js')

test('<CommentsSection /> renders correctly', () => {
  const commentsArray = [
    {"body": "the first comment"},
    {"body": "the second comment"}
  ]
  const component = shallow(<CommentsSection comments={commentsArray} slug={"a-fantastic-post"} />)
  expect(component).toMatchSnapshot()
})
