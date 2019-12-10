import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'

class CommentList extends Component {
    static PropTypes = {

    }

    render() {
        const { comments } = this.props;
        const commentsAll = comments.map((comment) => <Comment comment={comment} />)
        return (
            <div>
                {commentsAll}
            </div>
        )
    }
}

export default CommentList;
