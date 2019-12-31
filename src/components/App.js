import React, {Component} from 'react'
import Select from 'react-select'
import ArticleList from './ArticleList'
import 'react-select/dist/react-select.css'
import {connect} from 'react-redux'
import Counter from './Counter'

class App extends Component {
    state = {
        selected: null,
        username: ''
    }

    render() {
        console.log(this.props)
        const {articles} = this.props

        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        const {selected, username} = this.state

        return (
            <div>
                <h1>App name</h1>
                <Counter />
                <div>User: <input type = 'text' value = {username} onChange = {this.handleUserChange}/></div> 
                <Select options={options} value={selected} onChange={this.handleChange} multi />
                <ArticleList />
            </div>
        )
    }

    handleChange = selected => this.setState({ selected })

    handleUserChange = ev => {
        if (ev.target.value.length > 10) return this.setState({
            username: ''
        })

        this.setState({
            username: ev.target.value
        })
    }
}

export default connect(state => ({articles : state.articles}))(App)