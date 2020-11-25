import { Fragment, Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import callApi from './../utils/apiCaller';

class Login extends Component {

  constructor(props){
    super();
    this.state = {
      isLogin: false,
      uname: '',
      psw: '',
      status: 0
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    })
  }

  onLogin = (e) => {
    e.preventDefault();
    let { uname, psw } = this.state;
    callApi('login', 'POST', {
      email: uname,
      password: psw
    }).then(function (response) {
      localStorage.setItem('user', JSON.stringify(response))
    })
    
  }
  
  render(){
    return (
      
      <Fragment>
        <h1>Login</h1>
        <form onSubmit={(e)=>this.onLogin(e)}>
          <div className="container">
            <label htmlFor="uname"><b>Username</b></label>
            <input type="text" 
                    placeholder="Enter Username" 
                    name="uname" 
                    require
                    value={this.state.uname}
                    onChange={this.onChange}
            />
            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" require value={this.state.psw} onChange={this.onChange}/>
            <button type="submit">Login</button>
         </div>
        </form>
      </Fragment>
    );
  }
}

export default Login;
