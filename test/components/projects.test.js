import Projects from '../../components/Projects'

test('<Projects /> renders correctly', () => {
  const component = shallow(<Projects />)
  expect(component).toMatchSnapshot()
})
