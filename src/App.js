import './App.css';
import Hero from './components/Hero/Hero';
import Programs from "./components/Programs/Program"
import Reason from './components/Reason/Reason';
import Plans  from './components/Plans/Plans';
import Testimonials from "./components/Testimonials/Testimonials"
import Jion  from './components/Jion/Jion';
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <div className="App">
    <Hero />
    <Programs/>
    <Reason/>
    <Plans /> 
    <Testimonials />
    <Jion />
    <Footer />
  
    </div>
  );
}

export default App;
