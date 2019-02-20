import CommentCard from '../../components/CommentCard'

test('<CommentCard /> renders correctly', () => {
  const comment = {
    "body": "body of comment",
    "name" : "tony",
    "picture": "path to pic"
  }

  const component = shallow(<CommentCard comment={comment}/>)
  expect(component).toMatchSnapshot()
})
