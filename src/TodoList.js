import React, {Component} from 'react';

import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css'

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks : []
        }
        
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.completeTodo = this.completeTodo.bind(this);
    }

    addTodo(task) {
        this.setState({tasks : [...this.state.tasks, task]});
    }

    removeTodo(id) {
        this.setState({tasks : this.state.tasks.filter( t => t.key !== id)});
    }

    editTodo(id, updatedTask) {
        // Making new array
        const updatedTodos = this.state.tasks.map(t => {
            if(t.key === id) {
                return {...t, task : updatedTask};
            }
            return t;
        });
        this.setState({tasks : updatedTodos});
            
    }

    completeTodo(id) {
        const updatedTodos = this.state.tasks.map(t => {
            if(t.key === id) {
                return {...t, completed : !t.completed};
            }
            return t;
        });
        this.setState({tasks : updatedTodos});
    }

    render() {
        const tasks = this.state.tasks.map(t => <Todo task = {t.task} editTodo = {this.editTodo} removeTodo = {this.removeTodo} completedTodo = {this.completeTodo} completed = {t.completed} key = {t.key} id = {t.key} />);
        return(
            <div className = "TodoList">
                <h1>Task-Manager <span>A Simple Todo List!</span></h1>
                
                <ul>
                    {tasks}
                </ul>

                <NewTodoForm addTodo = {this.addTodo} />
            </div>

        )
    }
}

export default TodoList;