import React, {Component} from 'react';

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSaveData = this.handleSaveData.bind(this);
    }

    handleChangeName = (event)=>{this.setState({name: event.target.value});}
    handleChangeEmail = (event)=>{this.setState({email: event.target.value});}
    handleChangePassword = (event)=>{this.setState({password: event.target.value});}

    handleSaveData = (event) => {
        event.preventDefault();
        const name = this.state.name;
        const email = this.state.email;
        const password = this.state.password;
        
        localStorage.setItem('name',name);
        localStorage.setItem('email',email);
        localStorage.setItem('password',password);

        if(localStorage.getItem('name') !== undefined){
            setTimeout(()=>{
                window.location = '/';
            },5000)
        }else{
            window.location = '/register';
        }
    }
    render(){
        return(
            <div className="container card mt-5 border border-dark rounded" style={{ width: '20%' }}>
                <form className=" card-body"  onSubmit={this.handleSaveData}>
                    <div className="form-group">
                        <label >Name</label>
                        <input type="text" className="form-control" onChange={this.handleChangeName}/>
                    </div>
                    <div class="form-group">
                        <label >Email</label>
                        <input type="email" className="form-control "  onChange={this.handleChangeEmail}/>
                    </div>
                    <div class="form-group">
                        <label >Password</label>
                        <input type="password" className="form-control "  onChange={this.handleChangePassword}/>
                    </div>
                    <input type="submit" className="btn btn-dark form-control " value="Register"/>
                </form>
            </div>
            
        );    
    }
}
export default Register;
