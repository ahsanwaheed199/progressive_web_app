import './App.css';
import {Nav, Navbar} from 'react-bootstrap'
import {Link, Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Home from './component/Home'
import About from "./component/About"
import Users from './component/Users'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar bg="dark" variant="dark">
    <Navbar.Brand >Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link > <Link to='/'> Home</Link></Nav.Link>
      <Nav.Link > <Link to='/about'> About</Link></Nav.Link>
      <Nav.Link ><Link to='/users'> Users</Link></Nav.Link>
    </Nav>
  </Navbar>
  <Switch>
  <Route component={About} path='/about'/>
  <Route component={Users} path='/users'/>
  <Route component={Home} path='/'/>
  </Switch>
  </Router>
    </div>
  );
}

export default App;
