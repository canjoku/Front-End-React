import Header from '../components/header'

test('<Header /> renders correctly', () => {
  const component = shallow(<Header />)
  expect(component).toMatchSnapshot()
})
