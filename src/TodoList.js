import React, {Component} from 'react';

import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks : []
        }
        
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
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

    render() {
        const tasks = this.state.tasks.map(t => <Todo task = {t.task} editTodo = {this.editTodo} removeTodo = {this.removeTodo} key = {t.key} id = {t.key} />);
        return(
            <div>
                <h1>TodoList</h1>
                <NewTodoForm addTodo = {this.addTodo} />
                <ul>
                    {tasks}
                </ul>
            </div>

        )
    }
}

export default TodoList;