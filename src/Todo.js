import React, {Component} from 'react';

class Todo extends Component {

    render() {
        let {task} = this.props;

        return(
            <div>
                <div>{task}</div>
            </div>
        )
    }
}

export default Todo;