import PostSection from '../../components/PostSection'

test('<PostSection /> renders correctly', () => {
  const post =
  {
    title: "title of second post",
    body: "body of second post",
    createdAt: "18-01-2019"
  }
  const component = shallow(<PostSection post={post}/>)
  expect(component).toMatchSnapshot()
})