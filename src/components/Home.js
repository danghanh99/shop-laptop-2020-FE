import { Fragment, Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

class Home extends Component {
  render(){
    return (
      <Fragment>
        <h1>Home</h1>
        <Link to="/login">Login Page</Link>
      </Fragment>
    );
  }
}

export default Home;
