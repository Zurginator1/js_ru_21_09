import React, { Component } from 'react'

class AddComment extends Component {
    state = {
        values: {
            username: '',
            text: ''
        },
        errors: {}
    }

    componentDidMount() {
        const { values: { username, text } } = this.state;

        this.setState({
            errors: {
                username: this.validate(username) ? true : undefined,
                text: this.validate(text) ? true : undefined
            }
        });
    }

    validate(value) {
        return value.length < 10 || value.length > 50;
    }

    formIsValid() {
        const { errors } = this.state;
        for (let key in errors) {
            if (errors[key])
                return false;
        }
        return true;
    }

    handleSubmit = event => {
        event.preventDefault();
        if (this.formIsValid())
            return;
        this.setState({ values: { username: '', text: '' } })
    }

    handleChange = ev => {
        const { target: { value, name } } = ev;
        this.setState({
            values: { [name]: value },
            errors: {
                [name]: this.validate(value) ? true : undefined
            }
        });
    }

    render() {
        const { values: { username, text }, errors: { username: usernameError, text: textError } } = this.state;

        return (
            <form onSubmit={this.handleSubmit} >
                <b>Username</b>: <input type="text" style={{ color: usernameError ? 'red' : 'black' }} name="username" value={username} onChange={this.handleChange} />
                <b>Comment</b>: <input type="text" style={{ color: textError ? 'red' : 'black' }} name="text" value={text} onChange={this.handleChange} />
                <input type="submit" value="Let's go comment" />
            </form>
        )
    }
}

export default AddComment;
