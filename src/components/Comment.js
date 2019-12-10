import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
    static defaultProps = {
        user: 'No user',
        text: 'Comment is empty'
    }

    static propTypes = {
        user: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }

    render() {
        const { comment } = this.props;
        const { user, text } = comment;

        return (
            <div>
                <h3>{user}</h3>
                <span>{text}</span>
            </div>
        )
    }
}

export default Comment;
