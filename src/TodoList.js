import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';

import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks : [{ task : "Take bath", key : uuidv4()}]
        }
        
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(task) {
        this.setState({tasks : [...this.state.tasks, {task, key : uuidv4()} ] });
    }

    render() {
        const tasks = this.state.tasks.map(t => <Todo task = {t.task} key = {t.key} />);
        return(
            <div>
                <h1>TodoList</h1>
                <NewTodoForm addTodo = {this.addTodo} />
                {tasks}
            </div>

        )
    }
}

export default TodoList;