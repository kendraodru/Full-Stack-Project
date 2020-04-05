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
    }

    componentDidMount(){
        const sessionOverlay = document.querySelector('.modal-background');
  
        sessionOverlay.addEventListener('click', () => {
            // e.preventDefault();
            
            this.props.closeModal()
        });
    }

    componentWillUnmount(){
        this.props.clearErrors()
    }


    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal)
    }
      // handleDemoUser(e){
    //     const demoUser = {email:'demo_user@gmail.com', password:'password'};
    //     this.props.processForm(demoUser).then((this.props.closeModal))
    // }

    // animateLogin(speed = 75) {
    //     const demoUsers = [
    //         { email: "FoodKingGood", password: "joemama" },
    //         { email: "GimmeDaMunny", password: "iloveyou<3" },
    //         { email: "FlyGuy420", password: "smokeweederrday" },
    //         { email: "HackerMan", password: "kC!4M@[s`9?SuA'f'm" },
    //     ];
    //     const user = demoUsers[Math.floor(Math.random() * demoUsers.length)];
    //     let { email, password } = user;
    //     if (this.state.email !== email) {
    //         const inputUser = setInterval(() => {
    //             if (this.state.email !== email) {
    //                 const temp = username.slice(0, this.state.username.length + 1);
    //                 this.setState({ username: temp });
    //             } else { clearInterval(inputUser); animatePassword(); }
    //         }, speed);
    //     }
    //     const animatePassword = () => {
    //         const inputPassword = setInterval(() => {
    //             if (this.state.password !== password)
    //                 this.setState({ password: password.slice(0, this.state.password.length + 1) })
    //             else { clearInterval(inputPassword); login(); }
    //         }, speed);
    //     }
    //     const login = () => {
    //         this.props.login(this.state)
    //             .then(() => this.props.history.push('/preferences'))
    //         this.setState({ username: "", password: "" });
    //     }
    // }
    // handleDemoUser(e) {
    //     e.preventDefault();
    //     this.animateLogin(50);
    // }

    handleDemoUser(e){
        const demoUser = {email:'demo_user@gmail.com', password:'password'};
        this.props.processForm(demoUser).then((this.props.closeModal))
    }
    
    handleInput(type){
        return (e)=>{
            this.setState({[type]: e.target.value})
        };
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
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
                                <label className='form-label'>Email:
                                    <br/>
                                    <input type="text"
                                    onChange={this.handleInput("email")} 
                                    value={this.props.email}/>
                                </label>
                                <br/>
                                <label className='form-label'>Password:
                                <br/>
                                    <input type="password" 
                                        onChange={this.handleInput("password")} 
                                        value={this.props.password}/>
                                </label>
                                <br/>
                                <label id={this.props.formType === 'Create Account' ? "show" : "hide"} className='form-label'>First Name:
                                <br />
                                    <input type="text" 
                                        onChange={this.handleInput("first_name")}
                                        value={this.props.first_name} />
                                </label>
                                <br />
                                <label id={this.props.formType === 'Create Account' ? "show" : "hide"} className='form-label'>Last Name:
                                <br />
                                    <input type="text" 
                                        onChange={this.handleInput("last_name")}
                                        value={this.props.first_name} />
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