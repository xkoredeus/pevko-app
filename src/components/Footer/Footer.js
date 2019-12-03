import React from 'react'
import classes from './Footer.module.scss'

const Footer = props => (
    <footer className={classes['Footer']}>
        <div className="container">
            <div className="text-center">
                Мы не рекламируем пиво и прочие напитки
            </div>
        </div>
    </footer>

)

export default Footer