import React from 'react';
//import ReactDOM from 'react-dom';
//import {Home} from './home';
//import {Login} from './Login';
import {Link} from 'react-router';

class App extends React.Component {

	render() {
		return (
			<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<div className="container">
	  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="Login">Login Page</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="Home">Home Page</Link>
      </li>
	  <li className="nav-item">
      <Link className="nav-link" to="EditProfile">EditProfile Page</Link>
      </li>
      <li className="nav-item">
	  <Link className="nav-link" to="Chat">Chat Page</Link>
      </li>
      <li className="nav-item">
	  <Link className="nav-link" to="Color">Color Page</Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" name="search" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
	</div>
</nav>
{this.props.children}
</div>
		);
	}
}

export default App;
