import Navbar from '../../components/Navbar'

test('<Navbar /> renders correctly', () => {
  const component = shallow(<Navbar />)
  expect(component).toMatchSnapshot()
})
