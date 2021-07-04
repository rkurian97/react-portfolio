import React from 'react';
import Navbar from './components/Navbar';
import About from './pages/about';
import Contact from './pages/contact';
import Project from './pages/project';
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Switch>
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
