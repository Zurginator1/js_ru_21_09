import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordion from './Accordion'
import { connect } from 'react-redux'

class ArticleList extends Accordion {
    state = {
        error: null
    }

    render() {
        const { selected } = this.props
        const { dateRange } = this.props
        const { articles } = this.props
        if (this.state.error) return <h2>Error: {this.state.error.message}</h2>
        if (!articles.length) return <h3>No Articles</h3>
        const filteredArticles = articles.filter((article) => {
            if(dateRange.from === null || dateRange.to === null)
                return true;
            if (+(dateRange.from) <= Date.parse(article.date) && Date.parse(article.date) <= +(dateRange.to)) {
                if(selected.length === 0)
                    return true
                for (let i = 0; i < selected.length; i++) {
                    if (article.id === selected[i].value) {
                        return true
                    }
                }
            }
            return false
        })

        const articleElements = filteredArticles.map((article) => <li key={article.id}>
            <Article article={article}
                isOpen={article.id === this.state.openItemId}
                onButtonClick={this.toggleOpenItemMemoized(article.id)}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    componentDidCatch(error, info) {
        console.log('---', 123, error, info)
        this.setState({ error })
    }
}


ArticleList.defaultProps = {
    articles: []
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default connect((state) => ({
    articles: state.articles,
    selected: state.selectedArticles,
    dateRange: state.dateRange
}))(ArticleList)