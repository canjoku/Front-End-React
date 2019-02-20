import Layout from '../../components/Layout'

test('<Layout /> renders correctly', () => {
  const component = shallow(<Layout />)
  expect(component).toMatchSnapshot()
})
