import Menubar from "./components/menubar/Menubar";
import Intro from './components/intro/Intro'
import Works from './components/works/Works'
import Testimonials from './components/testimonials/Testimonials'
import Drawer from './components/drawer/Drawer'
import './app.scss'
import {useState} from "react"
function App() {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
        <Menubar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Drawer menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="sections">
        <Intro/>
        {/* <Portfolio/> */}
        <Works/>
        <Testimonials/>
        {/* <Contact/> */}
        </div>
    </div>
  );
}

export default App;
