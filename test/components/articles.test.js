import Articles from '../../components/Articles'


test('<Articles /> renders correctly', () => {
  const post =
  [{
    title: "title of first post",
    body: "body of first post",
    createdAt: "18-01-2019"
  }]

  const component = shallow(<Articles posts={ post }/>)
  expect(component).toMatchSnapshot()
})
