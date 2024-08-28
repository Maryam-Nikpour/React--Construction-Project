import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home'
import About from './pages/about/About'
import Projects from './pages/projects/Project'
import Blog from './pages/blog/Blog'
import Contact from './pages/contact/Contact'
import Services from './pages/services/Services'
import { useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out', 
      once: true,
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App