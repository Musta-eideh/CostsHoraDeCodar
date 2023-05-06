import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'

import Container from './components/layout/Container'

function App() {
  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/company">Company</Link>
        <Link to="/newproject">New Project</Link>
      </ul>

      <Switch>
        <Container customClass="min-height">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/company">
            <Company />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/newproject">
            <NewProject />
          </Route>
        </Container>
      </Switch>

      <p>Footer</p>
    </Router>
  );
}

export default App;
