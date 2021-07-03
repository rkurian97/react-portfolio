import React from 'react';
import Navbar from './components/Navbar';
import About from './pages/about';
import Contact from './pages/contact';
import Project from './pages/project';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/project' component={Project} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
