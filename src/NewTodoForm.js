import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';

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
        this.props.addTodo({...this.state, key : uuidv4(), completed : false });

        this.setState({task : ""});
    }

    render() {
        return (
            <div>
                <h4>Add new Todo!</h4>
                <form onSubmit = {this.handleSubmit}>
                    <label htmlFor = "new">Add Todo: </label>
                    <input id = "new" type = "text" paceholder = "New task" name = "task" value = {this.state.task} onChange = {this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>

        )
    }
}

export default NewTodoForm;