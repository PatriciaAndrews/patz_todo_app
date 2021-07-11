package com.sample.rest.webservices.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {
	private static List<Todo> todos = new ArrayList();
	private static long idCounter =0;
	
	static {
		todos.add(new Todo(++idCounter,"patz","Create spring boot project", new Date(), false));
		todos.add(new Todo(++idCounter,"patz","Define DB Configurations", new Date(), false));
		todos.add(new Todo(++idCounter,"patz","Create Entity Class", new Date(), false));
		todos.add(new Todo(++idCounter,"patz","Create JPA Repo Layer", new Date(), false));
		todos.add(new Todo(++idCounter,"patz","Create Rest Controller and map API request", new Date(), false));
		todos.add(new Todo(++idCounter,"patz","Create unit test", new Date(), false));
		todos.add(new Todo(++idCounter,"patz","Create and share git repo", new Date(), false));
		todos.add(new Todo(++idCounter,"patz","Create ins for each end point", new Date(), false));
		todos.add(new Todo(++idCounter,"patz","Simple ui", new Date(), false));
	}
	
	public List<Todo> findAll(){
		return todos;
	}
	
	public Todo deleteByID(long id) {
		Todo todo = findById(id);
		if(todo==null) return null;
		
		if(todos.remove(todo)) {
			return todo;
		}
		return null;
	}

	public Todo save(Todo todo) {
		if(todo.getId()==-1) {
			todo.setId(++idCounter);
			todos.add(todo);
		}else {
			deleteByID(todo.getId());
			todos.add(todo);
		}
		return todo;
	}
	
	public Todo findById(long id) {
		// TODO Auto-generated method stub
		for(Todo todo:todos) {
			if(todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}
}
