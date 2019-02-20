import Footer from '../../components/Footer'

test('<Footer /> renders correctly', () => {
  const component = shallow(<Footer />)
  expect(component).toMatchSnapshot()
})
