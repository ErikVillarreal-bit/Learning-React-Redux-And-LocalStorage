import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSaveData = this.handleSaveData.bind(this);
    }

    handleChangeEmail = (event)=>{this.setState({email: event.target.value});}
    handleChangePassword = (event)=>{this.setState({password: event.target.value});}

    handleSaveData = (event) => {
        
        if(localStorage.getItem('email') === this.state.email && localStorage.getItem('password') === this.state.password){
            setTimeout(()=>{
                window.location = '/home';
            },2000)
        }else{
            window.location = '/';
        }
        event.preventDefault();
    }
    render(){
        return(
            <div className="container card mt-5 border border-dark rounded" style={{ width: '20%' }}>
                <form className="card-body" onSubmit={this.handleSaveData}>
                    <div className="form-group">
                        <label >Email</label>
                        <input type="text" className="form-control" onChange={this.handleChangeEmail}/>
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" className="form-control " onChange={this.handleChangePassword}/>
                    </div>
                    <input type="submit" className="btn btn-dark form-control " value="Login"/>
                    <Link to="/register" className="text-white btn btn-dark form-control mt-2">Register Now</Link>
                </form>
            </div>
        );
    }
}

export default Login;
