import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
class Home extends React.Component {
	/*constructor(props){
		super(props);
		alert("constructor method");
	}

componentWillMount(){
	alert("componentWillMount method");
}	
componentDidMount(){
	alert("componentDidMount method");
} */
  handleClick(event) {
	//alert('A name was submitted: user -' + this.state.user + "and password - " + this.state.password);
	event.preventDefault();
    browserHistory.push("EditProfile");
  }
  handleChat(event) {
	//alert('A name was submitted: user -' + this.state.user + "and password - " + this.state.password);
	event.preventDefault();
    browserHistory.push("Chat");
  }
  handleTheme(event) {
	event.preventDefault();
    browserHistory.push("Theme");
  }
  handleColor(event) {
	event.preventDefault();
    browserHistory.push("Color");
  }
  handleLogin(event) {
	event.preventDefault();
    browserHistory.push("Login");
  }

	render() {
		//alert("render method");
		return (
			<div className="container-fluid chat-container">
				<div className="container-fluid h-100 content-section">
					<div className="row home-inner-section">

                
						<div className="col-xl-3 col-lg-5 col-md-12 col-sm-12 col-12 left-menu p-0">
							<div className="chat-header pl-2 pt-2">
								<div className="row no-gutters">
									<div className="profile-img"></div>
									<div className="user-info pl-2">
										<h5>Aaria Life</h5>
										<p>Cloud Solutions</p>
									</div>
									<div className="col text-right pr-3 menu-box">
										<div className="dropdown">
											<i className="fa fa-navicon"></i>
											<div className="dropdown-content text-left">
												<a href="home.html"><i className="fa fa-pencil-square-o"></i> Home</a>
												<a href="edit-profile.html"><i className="fa fa-pencil-square-o"></i><h7 onClick = {this.handleClick}>Edit Profile</h7></a>
												<a href="theme.html"><i className="fa fa-flickr"></i><h7 onClick = {this.handleTheme}> Theme</h7></a>
												<a href="color.html"><i className="fa fa-paint-brush"></i><h7 onClick = {this.handleColor}>Color</h7></a>
												<a href="edit-profile.html"><i className="fa fa-key"></i><h7 onClick = {this.handleClick}> Change Password</h7></a>
												<a href="#"><i className="fa fa-power-off"></i><h7 onClick = {this.handleLogin}> Sign Out</h7></a>
											</div>
										</div>
									</div>
								</div>
								<div className="search-box pr-2 pb-3 mt-4 no-gutters text-right">
									<form>
										<input type="text" placeholder="Search here..." className="sr-box" />
										<button className="search-btn">
											<i className="fa fa-search"></i>
										</button>
									</form>
								</div>
							</div>
							<div className="user-list">
								<a href="chat.html">
									<div className="row no-gutters pl-4 pr-3 py-3 list1">
										<div className="col-lg-2 col-md-1 col-sm-2 col-2">
											<div className="profile-img"></div>
										</div>
										<div className="col-lg-8 col-md-8 col-sm-8 col-8 user-info">
											<h5 onClick = {this.handleChat}>Susan Bot</h5>
											<p>Today chat will come here....</p>
										</div>
										<div className="time col-sm-2 col-2 text-right">
											<p>Friday</p>
										</div>
									</div>
								</a>
								<a href="chat.html">
									<div className="row no-gutters pl-4 pr-3 py-3 list1">
										<div className="col-lg-2 col-md-1 col-sm-2 col-2">
											<div className="profile-img"></div>
										</div>
										<div className="col-lg-8 col-md-8 col-sm-8 col-8 user-info">
											<h5>Susan Bot</h5>
											<p>Today chat will come here....</p>
										</div>
										<div className="time col-sm-2 col-2 text-right">
											<p>Friday</p>
										</div>
									</div>
								</a>
								<a href="chat.html">
									<div className="row no-gutters pl-4 pr-3 py-3 list1">
										<div className="col-lg-2 col-md-1 col-sm-2 col-2">
											<div className="profile-img"></div>
										</div>
										<div className="col-lg-8 col-md-8 col-sm-8 col-8 user-info">
											<h5>Susan Bot</h5>
											<p>Today chat will come here....</p>
										</div>
										<div className="time col-sm-2 col-2 text-right">
											<p>Friday</p>
										</div>
									</div>
								</a>
								<a href="chat.html">
									<div className="row no-gutters pl-4 pr-3 py-3 list1">
										<div className="col-lg-2 col-md-1 col-sm-2 col-2">
											<div className="profile-img"></div>
										</div>
										<div className="col-lg-8 col-md-8 col-sm-8 col-8 user-info">
											<h5>Susan Bot</h5>
											<p>Today chat will come here....</p>
										</div>
										<div className="time col-sm-2 col-2 text-right">
											<p>Friday</p>
										</div>
									</div>
								</a>
								<a href="chat.html">
									<div className="row no-gutters pl-4 pr-3 py-3 list1">
										<div className="col-lg-2 col-md-1 col-sm-2 col-2">
											<div className="profile-img"></div>
										</div>
										<div className="col-lg-8 col-md-8 col-sm-8 col-8 user-info">
											<h5>Susan Bot</h5>
											<p>Today chat will come here....</p>
										</div>
										<div className="time col-sm-2 col-2 text-right">
											<p>Friday</p>
										</div>
									</div>
								</a>
								<a href="chat.html">
									<div className="row no-gutters pl-4 pr-3 py-3 list1">
										<div className="col-lg-2 col-md-1 col-sm-2 col-2">
											<div className="profile-img"></div>
										</div>
										<div className="col-lg-8 col-md-8 col-sm-8 col-8 user-info">
											<h5>Susan Bot</h5>
											<p>Today chat will come here....</p>
										</div>
										<div className="time col-sm-2 col-2 text-right">
											<p>Friday</p>
										</div>
									</div>
								</a>
								<a href="chat.html">
									<div className="row no-gutters pl-4 pr-3 py-3 list1">
										<div className="col-lg-2 col-md-1 col-sm-2 col-2">
											<div className="profile-img"></div>
										</div>
										<div className="col-lg-8 col-md-8 col-sm-8 col-8 user-info">
											<h5>Susan Bot</h5>
											<p>Today chat will come here....</p>
										</div>
										<div className="time col-sm-2 col-2 text-right">
											<p>Friday</p>
										</div>
									</div>
								</a>
								<a href="chat.html">
									<div className="row no-gutters pl-4 pr-3 py-3 list1">
										<div className="col-lg-2 col-md-1 col-sm-2 col-2">
											<div className="profile-img"></div>
										</div>
										<div className="col-lg-8 col-md-8 col-sm-8 col-8 user-info">
											<h5>Susan Bot</h5>
											<p>Today chat will come here....</p>
										</div>
										<div className="time col-sm-2 col-2 text-right">
											<p>Friday</p>
										</div>
									</div>
								</a>
							</div>
						</div>


						<div className="col-xl-9 col-lg-7 col-md-9 col-sm-9 home-section">
							<div className="row h-100 justify-content-center align-items-center">
								<div className="col-sm-12 mt-5 text-center">
									<h3>Welcome, Aaria Life</h3>
									<div className="row justify-content-center">
										<div className="mid-profile"></div>
										<div className="col-sm-12 pt-2">
											<p>Cloud Solutions, Hyderabad, Telangan.</p>
											
											<button  className="btn btn-theme" onClick = {this.handleClick}>Edit Profile</button>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Home;
//<p className="mt-1"><a href="edit-profile.html"><strong>Edit Profile</strong></a></p>