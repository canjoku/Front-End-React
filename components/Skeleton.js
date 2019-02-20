import { Component } from 'react'
import PropTypes from 'prop-types'

class Skeleton extends Component {

  preLoader () {
    // this function initialises some pre loaders for the Skeleton. I have set it to a default of 4
    let preLoaders = []

    // default background style for each preloader
    let elementStyle = {
      'background': 'linear-gradient(to right, '+ this.props.color +', #f7f7f7)'
    }

    // the function performs an iteration to return 3 pre loaders for the skeleton
    for (let index = 0; index < 3; index++) {
      preLoaders.push(
        <div key={index} className="s-skeleton__element" style={elementStyle}></div>
      )
    }

    return preLoaders
  }
  // this function provides loader rows. the number of required rows can be provided via props
  loaderRows () {
    const rows = [];
    for (let index = 0; index < this.props.count; index++) {
      rows.push(
        <div key={index} className="s-skeleton">
          {this.preLoader()}
        </div>
      )
    }
    return rows
  }

  render () {
    return (
      <div>
        {this.loaderRows()}
      </div>
    )
  }

  static propTypes = {
    color: PropTypes.string,
    count: PropTypes.number
  }

  static defaultProps = {
    count: 1,
    color: '#173F5F'
  }

}

export default Skeleton
