import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { selectArticles } from '../../AC'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        selected: null
    }

    handleChange = (selected) => {
        const action = selectArticles(selected)
        this.props.dispatch(action)
        //this.setState({ selected })
    }

    render() {
        const { articles } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={this.props.selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default connect((state) => ({ selected: state.selectedArticles }))(SelectFilter)