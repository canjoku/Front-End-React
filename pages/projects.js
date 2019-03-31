import { Component } from 'react'
import Projects from '../components/Projects'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';




class ProjectsPage extends Component {
  render () {
    return (
      <React.Fragment>
        <Navbar/>
        <Projects />
        <Footer />
      </React.Fragment>
    )
  }
}

export default ProjectsPage

