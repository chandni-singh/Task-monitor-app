import React, {Component} from 'react';
import './Todo.css';

class Todo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isEditing : false,
            task : this.props.task
        }

        this.handleRemove = this.handleRemove.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.handleCompleted = this.handleCompleted.bind(this);
    }

    handleRemove() {
        this.props.removeTodo(this.props.id);
    }

    handleEdit() {
        this.props.editTodo(this.props.id,this.state.task);
        this.setState({isEditing : false});
    }

    toggleEdit() {
        this.setState({isEditing : !(this.state.isEditing)});
    }

    updateTask(evt) {
        evt.preventDefault();
        this.setState({ task : evt.target.value});
    }

    handleCompleted() {
        this.props.completedTodo(this.props.id);
    }

    render() {
        let {task} = this.props;
        let result;
        
        if(this.state.isEditing){
            result = (
                <div className = "Todo">
                    <form className = "Todo-edit-form" onSubmit = {this.handleEdit}>
                        <input type = "text" name = "editTodo" value = {this.state.task} onChange = {this.updateTask} />
                        <button>Save</button>
                    </form>
                </div>
            )
        }
        else {
            result = (
                <div className = "Todo">
                    <li className = {this.props.completed ? "Todo-task completed" : "Todo-task"} onClick = {this.handleCompleted}>{task}</li>
                    <div className = "Todo-buttons">
                        <button onClick = {this.toggleEdit}>
                            <i className = "fas fa-pen"></i>
                        </button>

                        <button onClick = {this.handleRemove}>
                            <i className = "fas fa-trash"></i>
                        </button>
                    </div>

                </div>
            )
        }
        
        return result;
    }
}

export default Todo;