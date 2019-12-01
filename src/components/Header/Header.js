import React, {Component} from 'react'
import classes from './Header.module.scss'
import Logo from './Logo/Logo'
import Nav from './Navigation/Nav'

class Header extends Component {
    render() {
        return (
            <div className={classes['Header']}>
                <div className={[' container']}>
                    <div className="d-flex justify-content-between align-items-center">
                        <Logo />
                        <Nav />
                    </div>
                </div>
            </div>
        )

    }
}

export default Header