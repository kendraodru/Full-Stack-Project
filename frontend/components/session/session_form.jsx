import React from 'react'
import { Link } from 'react-router-dom';
export default class sessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.renderErrors = this.renderErrors.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
    }
    
    handleInput(type){
        return (e)=>{
            this.setState({[type]: e.target.value})
        };
    }

    renderErrors(){
        return (
            <div className='errors-div'>
                <ul>
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    render(){
        const nameInput = (
            <div>
                <label>First Name:
                    <input type="text" 
                    onChange={this.handleInput("first_name")} 
                    value={this.props.first_name} />
                </label>
                <br/>
                <label>Last Name:
                    <input type="text" 
                    onChange={this.handleInput("last_name")} 
                    value={this.props.first_name} />
                </label>
            </div>
        );
        return(
            <div className='form-wrapper'>
            <div className="session-form-div">
                <h1> {this.props.formType === 'login' ? "Login" : "Sign up"}</h1> 
                 <form className="session-form-box" onSubmit={this.handleSubmit}>
                    <label>Email:
                        <input type="text" 
                        onChange={this.handleInput("email")} 
                        value={this.props.email}/>
                    </label>
                    <br/>
                    <label>Password:
                        <input type="password" onChange={this.handleInput("password")} value={this.props.password}/>
                    </label>
                    <br/>
                    {(this.props.formType === 'signup') ? nameInput : ''}
                    <input type="submit"
                    value={this.props.formType === 'signup' ? 'Sign Up' : 'Log in'}/>
                    {this.renderErrors()}
                    {this.props.navLink}
                 </form>
            </div>
            </div>
        )
    }
};