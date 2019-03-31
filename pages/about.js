import { Component } from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';

class AboutPage extends Component {
  render () {
    return (
      <React.Fragment>
        <Navbar />
        <About />
        <Footer />
      </React.Fragment>
    )
  }
}

export default AboutPage