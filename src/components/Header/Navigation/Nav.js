import React, {Component} from 'react'
import classes from './Nav.module.scss'
import {NavLink} from 'react-router-dom'

const links = [
    {to: '/beer-list', label: 'Всё певко', exact: true},
    {to: '/fav-list', label: 'Любимое певко', exact: false},
]

class Nav extends Component {
    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName={classes.active}
                        onClick={this.clickHandler}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }
    render() {
        return (
            <React.Fragment>
                <nav className={classes['Nav']}>
                    <ul>
                        { this.renderLinks() }
                    </ul>
                </nav>
            </React.Fragment>
        )
    }
}

export default Nav