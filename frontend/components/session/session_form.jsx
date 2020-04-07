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
        this.renderErrors = this.renderErrors.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
        // this.demoLogin = this.demoLogin.bind(this);
        this.animateLogin = this.animateLogin.bind(this);
    }

    componentWillUnmount(){
        this.props.clearErrors()
    }


    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal)
    }


    animateLogin(speed = 75) {
        const demoUsers = [
            { email: "demo_user@gmail.com", password: "password" },
            { email: "justry@gmail.com", password: "password" },
            // { email: "FlyGuy420", password: "smokeweederrday" },
            // { email: "HackerMan", password: "kC!4M@[s`9?SuA'f'm" },
        ];

        const user = demoUsers[Math.floor(Math.random() * demoUsers.length)];

        let { email, password } = user;

        if (this.state.email !== email) {
            const inputUser = setInterval(() => {
                if (this.state.email !== email) {
                    const temp = email.slice(0, this.state.email.length + 1);
                    this.setState({ email: temp });
                } else { clearInterval(inputUser); animatePassword(); }
            }, speed);
        }

        const animatePassword = () => {
            const inputPassword = setInterval(() => {
                if (this.state.password !== password)
                    this.setState({ password: password.slice(0, this.state.password.length + 1) })
                else { clearInterval(inputPassword); login(); }
            }, speed);
        }

        const login = () => {
            this.props.processForm(user)
                .then(() => this.props.closeModal())
            this.setState({ email: "", password: "" });
        }

    }


    handleDemoUser(e) {
        e.preventDefault();

        this.animateLogin(50);
    }



    handleInput(type){
        return (e)=>{
            this.setState({[type]: e.target.value})
        };
    }

    renderErrors() {
        let emptyInput = [
            "First name can't be blank", 
            "Last name can't be blank", 
            "Email can't be blank"
        ]
        let errors = [];
        this.props.errors.forEach(err =>{
            if (err === "Password is too short (minimum is 6 characters)"){
                errors.push(err)
            } else if (emptyInput.includes(err) && !errors.includes("All entries must be filled")){
                errors.push("All entries must be filled")
            } else if (!emptyInput.includes(err)){
                errors.push(err)
            }
        })

        return (
            <ul>
                {errors.map((error, i) => (
                    <li key={`error-${i}`} className='sess-errors'>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render(){
        return(
            <div className='outter-form-wrapper' onClick={e => e.stopPropagation()}>
                <div className='form-wrapper'>
                    <div className="background-form">
                        <div className='close-x-div'><span onClick={this.props.closeModal} className="close-x">×</span></div>
                        <div className="session-form-div">
                            <h1 className="form-title">{this.props.formType}</h1> 
                            <br/>
                            <form className="session-form-box">
                                <label>
                                    <br/>
                                    <input className='session-input no-outline' type="text"
                                    onChange={this.handleInput("email")} 
                                        value={this.state.email} placeholder="Email"/>
                                    <i id='email-icon' className="fas fa-envelope"></i>
                                </label>
                                <br/>
                                <label>
                                <br/>
                                    <input className='session-input no-outline' type="password" 
                                        onChange={this.handleInput("password")} 
                                        value={this.state.password} placeholder="Password"/>
                                    <i id='password-icon' className="fas fa-lock"></i>


                                </label>
                                <br/>
                                <label id={this.props.formType === 'Create Account' ? "show" : "hide"}>
                                <br />
                                    <input type="text" 
                                        className='session-input no-outline'
                                        placeholder="First Name"
                                        onChange={this.handleInput("first_name")}
                                        value={this.props.first_name} />
                                    <i id='firstname-icon' className="fas fa-user-alt"></i>
                                </label>
                                <br />
                                <label id={this.props.formType === 'Create Account' ? "show" : "hide"} className='lastname-input'>
                                <br />
                                    <input type="text" 
                                        className='session-input no-outline'
                                        placeholder="Last Name"
                                        onChange={this.handleInput("last_name")}
                                        value={this.props.first_name} />
                                    <i id='lastname-icon' className="fas fa-user-alt"></i>
                                </label>
                                <div className="bottom-form">
                                    
                                    <span className="submit-session" onClick={this.handleSubmit}><p>{this.props.formType === 'Create Account' ? 'Sign up' : 'Login'}</p></span>
                                        <span id={this.props.formType === 'Create Account' ? "hide" : "show"}
                                        className="submit-session" onClick={this.handleDemoUser}><p>Demo User</p></span>
                                        {this.props.otherForm}
                                    
                                    {this.renderErrors()}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};