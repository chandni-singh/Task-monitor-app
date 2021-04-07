import React, {Component} from 'react';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task : ""
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({task : evt.target.value});
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addTodo(this.state.task);

        this.setState({task : ""});
    }

    render() {
        return (
            <div>
                <h4>Add new Todo!</h4>
                <form>
                    <label htmlFor = "new">Add Todo: </label>
                    <input id = "new" type = "text" name = "task" value = {this.state.task} onChange = {this.handleChange} />
                    <button onClick = {this.handleSubmit}>Submit</button>
                </form>
            </div>

        )
    }
}

export default NewTodoForm;