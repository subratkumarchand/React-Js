import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            //user : "asdsd",
            //password: "123",
            fields: { name :'',password:''},
            errors: {},
           
        }
    
    //this.user = this.user.bind(this);
    //this.password = this.password.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleValidation(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    //UserName
    if(!fields["name"]){
        formIsValid = false;
        errors["name"] = "Cannot be empty";
     }
     if(typeof fields["name"] !== "undefined"){
       // if(!fields["name"].match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{10}$/)){
        if(!fields["name"].match(/^(\+\d{1,3}[- ]?)?\d{10}$/)){
        
           formIsValid = false;
           errors["name"] = "Enter valid Email";
        }        
     }
     if(!fields["password"]){
         formIsValid = false;
         errors["password"] = "Password Cannot be Empty";
     }
     if(typeof fields["name"] !== "undefined"){
         
     if(!fields["password"].match(/^(\+\d{1,3}[- ]?)?\d{4}$/)){
         
         formIsValid = false;
        errors["password"] = "Enter valid password";
     }
    }
     this.setState({errors: errors});
     return formIsValid;
  }

  user(event) {
    this.setState({user: event.target.value});
  }
  password(event){
      this.setState({password: event.target.value});
  }

  handleSubmit(event) {
      event.preventDefault();
   // alert('A name was submitted: user -' + this.state.user + " and password - " + this.state.password);
    //browserHistory.push("Home");
    
    if(this.handleValidation()){
        
        var emailid =this.state.fields.name;
        var psrd =  this.state.fields.password;
        const url2 = "https://jsonplaceholder.typicode.com/posts";
        var url = 'https://middleware.dev.aariabot.com:80/api/sys/auth/login';
        var data = {mobileNumber: emailid, "pin":psrd};
        
        fetch(url2, {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(data), // data can be `string` or {object}!
          //mode: "no-cors",
          headers:{
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
        .then(response => alert('Success:' + JSON.stringify(response)))
        .catch(error => alert('Error:' +  error));
        
     }else{
        alert("Form has errors.")
     }
  }
  handleChange(field, e){         
    let fields = this.state.fields;
    fields[field] = e.target.value;        
    this.setState({fields});
}
    render() {
         return(
             
        <div className="container-fluid full-container">
            <div className="container d-flex justify-content-center">
                <div className="col-xl-5 col-md-7 col-sm-7 col-12 pt-3 login-box">
                    <h2 className="text-center">Aarialife Bot</h2>
                    <div className="row justify-content-center no-gutters mt-5">
                        <div className="col-sm-12 pb-4 login-box">
                        <form name="contactform" className="contactform" onSubmit= {this.handleSubmit.bind(this)} >
                        <div className="col input-box" >
                                <div className="form-group">
                                    <div className="input-group">
                                        <input ref="name" size="30" type="text" className="form-control" name="name"  onChange={this.handleChange.bind(this, "name")}   />
                                        <span className="bar"></span>
                                        <label>Mobile Number</label>
                                       
                                        <p> <span style={{color: "red"}}>{this.state.errors["name"]}</span></p>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <input ref="password" type="password" className="form-control" name="password"  onChange={this.handleChange.bind(this, "password")}/>
                                       
                                        <span className="bar"></span>
                                        <label>Password</label>
                                        <p> <span style={{color: "red"}}>{this.state.errors["password"]}</span></p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <input type="submit" className="btn btn-success login-btn" onClick={this.handleSubmit} value="submit"/>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		);
    }
}
export default Login;



                           
