import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { QUANITY_OF_COMMENTS } from '../constants'

class Paginator extends Component {


    render() {
        const { page, total } = this.props
        const pageInt = parseInt(page)
        const totalPages = (parseInt(total) / QUANITY_OF_COMMENTS + 1)
        const styleDiv = {
            display: 'flex',
            width: '100px',
            justifyContent: 'space-between',
            paddingLeft: '50px'
        }

        let first = (pageInt - 2) < 1 ? 1 : (pageInt - 2)
        let last = (pageInt + 2) > totalPages ? Math.trunc(totalPages) : (pageInt + 2)

        const paginator = Array(last - first + 1).fill(0).map((item, index) => (<NavLink to={`/comments/${index + first}`}>{index + first}</NavLink>))
        paginator[page - first] = page;

        return (<div style={styleDiv}>
            {paginator}
        </div>)
    }
}

export default connect((state) => {
    return { total: state.commentsPage.get('totalComments') }
})(Paginator)