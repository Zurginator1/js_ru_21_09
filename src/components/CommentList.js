import React, { Component } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm'
import { connect } from 'react-redux'
import { loadComments } from '../AC'
import articles from '../reducer/articles'
import Loader from './Loader'

class CommentList extends Component {
    static defaultProps = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentWillReceiveProps({ loadComments, article: { id, loadedComments } }) {
        if(!loadedComments) loadComments(id)
    }

    render() {
        const { isOpen, toggleOpen } = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { article: { id, comments = [], loadingComments }, isOpen } = this.props
        if (!isOpen) return null
        if (loadingComments) return <Loader />

        const body = comments.length ? (
            <ul>
                {comments.map(id => {
                    return <li key={id}><Comment id={id} /></li> 
                })}
            </ul>
        ) : <h3>No comments yet</h3>

        return (
            <div>
                {body}
                <CommentForm articleId={id} />
            </div>
        )
    }
}


export default connect(null, { loadComments })(toggleOpen(CommentList))