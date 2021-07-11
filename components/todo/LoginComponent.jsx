import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: "admin",
			password: '',
			hasLoginFailed: false,
			showSuccessMsg: false
		}
		this.handleChange = this.handleChange.bind(this)
		this.loginClicked = this.loginClicked.bind(this)
	}
	handleChange(event) {
		console.log(this.state);
		this.setState({ [event.target.name]: event.target.value })
	}
	loginClicked() {
		console.log(this.state);
		if (this.state.username === "admin" && this.state.password === "terminus@123") {
			console.log("SUCCESS")
			AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
			this.props.history.push(`/welcome/${this.state.username}`)
			this.setState({ showSuccessMsg: true })
			this.setState({ hasLoginFailed: false })
		}
		else {
			console.log("Failed")
			this.setState({ showSuccessMsg: false })
			this.setState({ hasLoginFailed: true })
		}
	}

	render() {
		return (
			<div>
				<h1>Login</h1>
				<div className="container">
					{this.state.hasLoginFailed && <div className="alert alert-warning"> Invalid Credentials</div>}
					{this.state.showSuccessMsg && <div> Login Successful</div>}
					User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
					Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
					<button className="btn btn-success" onClick={this.loginClicked}> Login </button>
				</div>
			</div>
		)
	}
}
export default LoginComponent

