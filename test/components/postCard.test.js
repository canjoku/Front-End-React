import PostCard from '../../components/PostCard'

test('<PostCard /> renders correctly', () => {
  const post = {
    id: 4, title: "the first post"
  }
  const component = shallow(<PostCard post={post} />)
  expect(component).toMatchSnapshot()
})
