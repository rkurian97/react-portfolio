import React, {useState} from 'react';
import Navbar from './components/Navbar';
import About from './pages/about';
import Contact from './pages/contact';
import Project from './pages/project';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isOpen, setIsOpen]= useState(false)
  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <div className="App">
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Switch>
        <Route exact path="/"> <Redirect to="/about" /></Route>
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/project' component={Project} />
      </Switch>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
