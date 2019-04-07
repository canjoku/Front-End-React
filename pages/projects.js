import { Component } from 'react'
import Projects from '../components/Projects'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';




class ProjectsPage extends Component {
  render () {
    return (
      <div className='wrapper'>
        <Navbar/>
        <Projects />
        <Footer />
      </div>
    )
  }
}

export default ProjectsPage

