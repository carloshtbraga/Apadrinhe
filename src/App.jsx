import './App.css'
import Header from './pieces/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrousel from './pieces/Carrousel';
import History from './pieces/History';
import Footer from './pieces/Footer';
import Welcome from './pieces/Welcome';
import Destaques from './pieces/Destaques';
import Team from './pieces/Team';
import AnimateOnScroll from 'react-global-animate-on-scroll';


function App() {
  return (
    <>
     <Header />
     <Carrousel />
     <Welcome />
     <History />
     <Destaques />
     <Team />
     <Footer />
     <AnimateOnScroll animateOnce/>
    </>
  )
}

export default App
