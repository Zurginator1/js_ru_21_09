import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MenuItem from './MenuItem'

class Menu extends Component {
    static propTypes = {

    };

    static contextTypes = {
        language: PropTypes.object
    }

    render() {
        const { menu } = this.context.language
        return (
            <div>
                <h2>{menu.title}</h2>
                {this.props.children}
            </div>
        )
    }
}

export {MenuItem}
export default Menu