import { Fragment, Component } from 'react';
import Home from './components/Home'
import Admin from './components/admin/Admin'
import Login from './components/Login'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render(){
    return (
      <Fragment>
          <Router>
            <Route exact path="/" component={Home}/>
            <Route exact path="/admin" component={Admin}/>
            <Route exact path="/login" component={Login}/>
          </Router>
      </Fragment>
    );
  }
}

export default App;
