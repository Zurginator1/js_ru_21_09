import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paginator from '../Paginator'
import { loadCommentsPage} from '../../AC'
import Loader from '../Loader'
import Comment from '../Comment'

class CommentsPage extends Component {

    checkAndLoadComments() {
        const { page, loaded, loading, loadCommentsPage } = this.props
        if (!loaded && !loading)
            loadCommentsPage(page)
    }

    getBody() {
        const { comments, loaded, loading } = this.props

        if (loading)
            return <Loader />

        if (!loaded)
            return null

        return comments.length ? (
            <ul>
                {comments.map(id => <li key={id}><Comment id={id} /></li>)}
            </ul>
        ) : <h3>No comments yet</h3>
    }

    render() {
        const { page } = this.props

        this.checkAndLoadComments()

        return (
            <div>
                <Paginator page={page} />
                {this.getBody()}
                <Paginator page={page} />
            </div>
        )
    }
}

export default connect((state, { page }) => ({
    comments: state.commentsPage.getIn([page, 'comments']),
    loading: state.commentsPage.getIn([page, 'loading']),
    loaded: state.commentsPage.getIn([page, 'loaded'])
}), (dispatch) => ({
    loadCommentsPage : (page) => dispatch(loadCommentsPage(page))
}))(CommentsPage)