import React from 'react'
import { Link } from 'react-router-dom';
export default class sessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            errors: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.renderErrors = this.renderErrors.bind(this)
    }

    componentWillReceiveProps(nextProps){
        // debugger
        this.setState({errors: nextProps.errors})
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
                    {Object.keys(this.state.errors).map((error, i) => (
                        <li key={`error-${i}`}>
                            {this.state.errors[error]}
                        </li>
                    ))}
                </ul>
            </div>
        );
        // return errors;
    }

    render(){
        const nameInput = (
            <div>
                <label className='form-label'>First Name:
                    <br/>
                    <input type="text" 
                    onChange={this.handleInput("first_name")} 
                    value={this.props.first_name} />
                </label>
                <br/>
                <label className='form-label'>Last Name:
                    <br/>
                    <input type="text" 
                    onChange={this.handleInput("last_name")} 
                    value={this.props.first_name} />
                </label>
            </div>
        );
        return(
            <div className='form-wrapper'>
                <div className="background-form">
                <div className="session-form-div">
                    <h1 className="form-title">{this.props.formType}</h1> 
                    <br/>
                    <form className="session-form-box">
                        <label className='form-label'>Email:
                            <br/>
                            <input type="text" 
                            onChange={this.handleInput("email")} 
                            value={this.props.email}/>
                        </label>
                        <br/>
                        <label className='form-label'>Password:
                        <br/>
                        <input type="password" onChange={this.handleInput("password")} value={this.props.password}/>
                        </label>
                        <br/>
                        {(this.props.formType === 'Create Account') ? nameInput : ''}
                            <div className="bottom-form">
                                <p className="submit-session" onClick={this.handleSubmit}>{this.props.formType === 'Create Account' ? 'Sign up' : 'Login'}</p>
                                {this.props.navLink}
                            </div>
                        {this.renderErrors()}
                    </form>
                </div>
                </div>
            </div>
        )
    }
};