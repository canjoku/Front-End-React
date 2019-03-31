import About from '../../components/About'

test('<About /> renders correctly', () => {
  const component = shallow(<About />)
  expect(component).toMatchSnapshot()
})
