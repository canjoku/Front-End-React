import { Component } from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';

class AboutPage extends Component {
  render () {
    return (
      <div className='wrapper'>
        <Navbar />
        <About />
        <Footer />
      </div>
    )
  }
}

export default AboutPage