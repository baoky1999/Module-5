import React, { Component } from "react";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            item: ''
        };
    }
    handleChange = (event) => {
        this.setState({item: event.target.value})
    }

    handleAddItem = () => {
        if (this.state.item.trim() !== '') {
            this.setState(prevState => ({
                list: [...prevState.list, prevState.item],
                item: ''
            }));
        }
    }


    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <input
                    type="text"
                    value={this.state.item}
                    onChange={this.handleChange}
                    placeholder="Enter a task"
                />
                <button onClick={this.handleAddItem}>Add</button>
                <ul>
                    {this.state.list.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Home;
