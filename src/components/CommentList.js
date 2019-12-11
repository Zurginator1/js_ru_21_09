import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    }

    state = {
        isOpen: false
    }

    onClickС = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        const { comments } = this.props;
        const commentsAll = comments.map((comment) => <Comment comment={comment} key={comment.id} />);
        const body = this.state.isOpen && commentsAll;

        return (
            <div>
                <button onClick={this.onClickС}>{this.state.isOpen ? 'Close comments' : 'Open comments'}</button>
                {body}
            </div>
        )
    }
}

export default CommentList;
