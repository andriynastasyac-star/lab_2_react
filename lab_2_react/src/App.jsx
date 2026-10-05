import Header from './Header'
import About from './About'
import Education from './Education'
import Skills from './Skills'
import Interests from './Interests'
import Contacts from './Contacts'
import Footer from './Footer'

function App() {
  return (
    <>
      <Header />

      <main>
        <About />
        <Education />
        <Skills />
        <Interests />
        <Contacts />
      </main>

      <Footer />
    </>
  )
}

export default App