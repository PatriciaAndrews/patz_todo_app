import React, { Component } from 'react'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'
import moment from 'moment'

class ListTodosComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			todos: [],
			message:null
		}
		this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
		this.updateTodoClicked = this.updateTodoClicked.bind(this)
		this.addTodoClicked = this.addTodoClicked.bind(this)
		this.refershTodo = this.refershTodo.bind(this)
	}

	componentDidMount() {
		this.refershTodo();
	}
	refershTodo() {
		let username = AuthenticationService.getLoggedInUser();
		TodoDataService.reteriveAllTodos(username)
			.then(
				response => {
					this.setState({ todos: response.data })
				}
			)
	}
	deleteTodoClicked(id) {
		let username = AuthenticationService.getLoggedInUser();
		TodoDataService.deteletTodo(username, id)
			.then(
				response => {
					this.setState({ message: `Delete of todo ${id} Successful` })
					this.refershTodo()
				}
			)
	}
	addTodoClicked() {
		this.props.history.push(`/todos/-1`)
	}
	updateTodoClicked(id) {
		this.props.history.push(`/todos/${id}`)
	}
	render() {
		return (
			<div>
				<h1> My Todos </h1>
				{this.state.message && < div className="alert alert-success">{this.state.message} </div>}
				<div className="container">
					<table className="table">
						<thead> <tr> <th> Id </th> <th> Desc </th><th> Done </th> <th> TargetDate </th> <th> Update </th><th> Delete </th></tr></thead>
						<tbody>
							{
								this.state.todos.map(todo =>
									<tr key={todo.id}>
										<td>{todo.id}</td>
										<td>{todo.description}</td>
										<td>{todo.done.toString()}</td>
										<td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
										<td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)} > Update </button></td>
										<td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}> Delete </button></td>
									</tr>)
							}
						</tbody>
					</table>
					<div className="row">
						<button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
					</div>
				</div>
			</div>
		)
	}
}
export default ListTodosComponent

