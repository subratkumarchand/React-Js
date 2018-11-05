import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
class EditProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            FirstName: "Nagarjuna",
            LastName: "Reddy",
            currentpassword: "123",
            newpassword : "123",
            confirmpassword : "123"
        }

        this.FirstName = this.FirstName.bind(this);
        this.LastName = this.LastName.bind(this);
        this.currentpassword = this.currentpassword.bind(this);
        this.newpassword = this.newpassword.bind(this);
        this.confirmpassword = this.confirmpassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    FirstName(event) {
        this.setState({ FirstName: event.target.value });
    }
    LastName(event) {
        this.setState({ LastName: event.target.value });
    }

    currentpassword(event) {
        this.setState({ currentpassword: event.target.value });
    }
    newpassword(event) {
        this.setState({ newpassword: event.target.value });
    }
    confirmpassword(event) {
        this.setState({ confirmpassword: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: FirstName - ' + this.state.FirstName + " and LastName - " + this.state.LastName);
        browserHistory.push("Home");
        event.preventDefault();

    }
    handleClick(event){
         event.preventdefault();
         browserHistory.push("Home");
    }
    render() {
        return (
            //<div href="./edit-profile.html"><i class="fa fa-pencil-square-o"></i> Edit Profile</div>
            <div className="container-fluid chat-container">
                <div className="container-fluid h-100 content-section">
                    <div className="row edit-inner-section">


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
                                                <a href="home.html"><i className="fa fa-pencil-square-o"></i><h7 onClick = {this.handleClick}>Home</h7></a>
                                                <a href="edit-profile.html"><i className="fa fa-pencil-square-o"></i> Edit Profile</a>
                                                <a href="theme.html"><i className="fa fa-flickr"></i> Theme</a>
                                                <a href="color.html"><i className="fa fa-paint-brush"></i> Color</a>
                                                <a href="edit-profile.html"><i className="fa fa-key"></i> Change Password</a>
                                                <a href="#"><i className="fa fa-power-off"></i> Sign Out</a>
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
                                        <div className="col-xl-2 col-lg-2 col-md-1 col-sm-2 col-2">
                                            <div className="profile-img"></div>
                                        </div>
                                        <div className="col-xl-8 col-lg-7 col-md-8 col-sm-8 col-8 user-info">
                                            <h5>Susan Bot</h5>
                                            <p>Today chat will come here....</p>
                                        </div>
                                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 time text-right">
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


                        <div className="col-xl-9 col-lg-7 col-md-12 col-sm-9 col-12 edit-profile">
                            <div className="row">
                                <div className="col-sm-12 py-3 edit-header">
                                    <h5><i className="fa fa-pencil-square-o"></i> Edit Profile</h5>
                                </div>
                            </div>
                            <div className="row mt-2 justify-content-center align-items-center">
                                <div className="col-xl-4 col-lg-8 col-md-8 col-sm-4 edit-profile-img text-center py-3">
                                    <h4 className="mb-4">My Profile</h4>
                                    <div className="row justify-content-center align-items-center">
                                        <div className="pro-img"></div>
                                    </div>
                                    <form>
                                        <div className="row mt-4">
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input type="text" placeholder="FirstName" className="txt" name="FirstName" onChange={this.FirstName} />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input type="text" placeholder="LastName" className="txt" name="LastName" onChange={this.LastName} />

                                                    </div>
                                                </div>
                                                <div className="btn-block text-center">
                                                    <input type="submit" value="SAVE CHANGES" className="btn btn-theme" onClick={this.handleSubmit} />

                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="row mt-3 text-center justify-content-center align-items-center">
                                <div className="col-xl-4 col-lg-8 col-md-8 col-sm-4 edit-profile-img py-3">
                                    <h4 className="mb-4">Change Password</h4>
                                    <form>
                                        <div className="row mt-0">
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input type="password" placeholder="Current Password" className="txt" name="curr_pwd" onChange = {this.currentpassword} />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input type="password" placeholder="New Password" className="txt" name="new_pwd" onChange = {this.newpassword} />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input type="password" placeholder="Confirm Password" className="txt" name="cnf_pwd"  onChange = {this.confirmpassword} />
                                                    </div>
                                                </div>
                                                <div className="btn-block text-center">
                                                    <input type="submit" value="SAVE CHANGES" className="btn btn-theme" onClick={this.handleSubmit} />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}
export default EditProfile;