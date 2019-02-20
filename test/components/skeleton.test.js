import Skeleton from '../../components/Skeleton'

test('<Skeleton /> renders correctly', () => {
  const component = shallow(<Skeleton count={2} color="#F6D55C" />)
  expect(component).toMatchSnapshot()
})
