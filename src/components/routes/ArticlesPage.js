import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import ArticleList from '../ArticleList'
import Article from '../Article'
import PropTypes from 'prop-types'

class ArticlesPage extends Component {
    static propTypes = {

    };

    static contextTypes = {
        language: PropTypes.object
    }

    render() {
        const { articlesPage } = this.context.language
        console.log('---', 2)
        return (
            <div>
                <h3>{articlesPage.title}</h3>
                <ArticleList />
                <Route path = '/articles/:id' children = {this.getArticleView}/>
            </div>
        )
    }

    getArticleView = ({ match }) => {
        const { articlesPage } = this.context.language
        if (!match) return <h2>{articlesPage.select}</h2>

        return <Article isOpen id = {match.params.id} key = {match.params.id} />
    }
}

export default ArticlesPage