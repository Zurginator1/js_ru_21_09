import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import ArticlesPage from './routes/ArticlesPage'
import CommentsPage from './routes/CommentsPage'
import Filters from './Filters'
import Counter from './Counter'
import Menu, {MenuItem} from './Menu'
import localizationEn from '../localizations/EN.json'
import localizationRu from '../localizations/RU.json'

class App extends Component {
    state = {
        username: '',
        language: localizationEn
    }

    static childContextTypes = {
        user: PropTypes.string,
        language: PropTypes.object
    }

    getChildContext() {
        console.log("STATE", this.state)
        return {
            user: this.state.username,
            language: this.state.language
        }
    }

    render() {
        const {username} = this.state
        const { app } = this.state.language
        console.log('---', 1)

        return (
            <div>
                <h1>{app.title}</h1>
                <h3>{app.language}: </h3>
                <button onClick = {this.handleChangeEn}>EN</button>
                <button onClick = {this.handleChangeRu}>RU</button>
                <Menu>
                    <MenuItem to = '/articles'>{app.articles}</MenuItem>
                    <MenuItem to = '/filters'>{app.filters}</MenuItem>
                    <MenuItem to = '/counter'>{app.counter}</MenuItem>
                    <MenuItem to = '/comments/1'>{app.comments}</MenuItem>
                </Menu>
                {app.user}: <input type = 'text' value = {username} onChange = {this.handleUserChange}/>
                <Switch>
                    <Redirect from = '/' exact to = '/articles'/>
                    <Route path = '/counter' component = {Counter} exact />
                    <Route path = '/filters' component = {Filters} />
                    <Route path = '/articles/new' render = {this.newArticlePage} />
                    <Route path = '/articles' component = {ArticlesPage} />
                    <Route path = '/comments' component = {CommentsPage}/>
                    <Route path = '*' render = {this.notFound} />
                </Switch>
            </div>
        )
    }

    handleChangeEn = () => {
        if(this.state.language !== 'EN')
            this.setState({
                language: localizationEn
            })
    }

    handleChangeRu = () => {
        if(this.state.language !== 'RU')
            this.setState({
                language: localizationRu
            })
    }

    notFound = () => <h1>{app.notFound}</h1>

    newArticlePage = () => <h1>{app.newArticlePage}</h1>

    handleUserChange = ev => {
        if (ev.target.value.length > 10) return this.setState({
            username: ''
        })

        this.setState({
            username: ev.target.value
        })
    }
}

export default App