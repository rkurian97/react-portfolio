import About from './pages/about';
import Contact from './pages/contact';
import Project from './pages/project';
import Footer from './components/Footer.js'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar'
function App() {

  return (
    <div className="App flex flex-col min-h-screen">
    <Router>
      <Navbar/>
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
