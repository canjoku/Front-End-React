import Header from '../../components/Header'


test('<Header /> renders correctly', () => {
  const component = shallow(<Header />)
  expect(component).toMatchSnapshot()
})
