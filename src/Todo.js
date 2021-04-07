import React, {Component} from 'react';

class Todo extends Component {

    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleRemove() {
        this.props.removeTodo(this.props.id);
    }

    handleEdit() {
        this.props.editTodo(this.props.id);
    }

    render() {
        let {task} = this.props;
        
        return(
            <div>
                <div>{task}</div>
                <button onClick = {this.handleRemove}>Delete</button>
                <button onClick = {this.handleEdit}>Edit</button>
            </div>
        )
    }
}

export default Todo;