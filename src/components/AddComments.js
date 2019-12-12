import React, { Component } from 'react'

class AddComment extends Component {
    state = {
        username: '',
        text: '',
        usernameStyle: {color : 'red'},
        textStyle: {color : 'red'}
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.usernameStyle.color === 'red' || this.state.textStyle.color === 'red')
            return
        this.setState({ username: '', text: '' })
    }

    handleChange = ev => {
        const { target: { value, name } } = ev;
        this.setState({ [name]: value });
        const style = name + 'Style';

        if (value.length < 10 || value.length > 50) {
            this.setState({ [style]: { color: 'red' } })
        }
        else
            this.setState({ [style]: { color: 'black' } });
    }

    render() {
        const { username, text, usernameStyle, textStyle } = this.state;

        return (
            <form onSubmit={this.handleSubmit} >
                <b>Username</b>: <input type="text" style={usernameStyle} name="username" value={username} onChange={this.handleChange} />
                <b>Comment</b>: <input type="text" style={textStyle} name="text" value={text} onChange={this.handleChange} />
                <input type="submit" value="Let's go comment" />
            </form>
        )
    }
}

export default AddComment;
