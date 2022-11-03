
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import Works from './Components/Works/Works';
import Services from './Components/Services/Services';
import Skills from './Components/Skills/Skills';
import {Container } from 'react-bootstrap';
import Hero from './Components/Hero/Hero';
// import Router from './Router/Router';
// import styles from './App.module.css';
import Line from './Components/Line/Line';
function App() {
  return (
    <Container>
    {/* <div className={styles.App}> */}
      <Navbar/>
      <Hero />
      <Line/>
      <Services />
      <Line/>
      <Skills/>
      <Line/>
      <Works />
      <Line/>
      <About />
    {/* </div> */}
    </Container>
  );
}

export default App;
