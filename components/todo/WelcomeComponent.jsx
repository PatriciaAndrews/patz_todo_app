import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'

class WelcomeComponent extends Component {
	constructor(props) {
		super(props)
		this.retrieveWelcomeMsg = this.retrieveWelcomeMsg.bind(this)
		this.handlesSucessfulResponse = this.handlesSucessfulResponse.bind(this)
		this.handleError = this.handleError.bind(this)
		this.state = {
			welcomeMessage:''
        }
    }
	render() {
		return (
			<>
				<h1> Welcome! </h1>
				<div className="container">
					Welcome {this.props.match.params.name}.
					You can manage your todos <Link to="/todos">here</Link>.
				</div>
				<div className="container">
					Click Here
					<button className="btn btn-success" onClick={this.retrieveWelcomeMsg}> Get Welcome Message</button>
				</div>
				<div className="container">
					{this.state.welcomeMessage}
				</div>
			</>

		)
	}
	retrieveWelcomeMsg() {
/*		HelloWorldService.executeHelloWorldService()
			.then(response => this.handlesSucessfulResponse(response))*/
/*		HelloWorldService.executeHelloWorldBeanService()
			.then(response => this.handlesSucessfulResponse(response))*/
		HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
			.then(response => this.handlesSucessfulResponse(response))
			.catch(error => this.handleError(error))

	}
	handlesSucessfulResponse(response) {
		this.setState({ welcomeMessage: response.data.msg })
	}
	handleError(error) {
		console.log(error.response)
		this.setState({ welcomeMessage: error.response.data.message })
	}
}

export default WelcomeComponent
