import React from 'react'
import classes from './Logo.module.scss'

const Logo = props => (
    <div className={'d-flex align-items-center'}>
        <div className={classes['bottle']}>
            <div className={classes['bottle-face']}>
                <svg viewBox="0 0 220 860" xmlns="http://www.w3.org/2000/svg" className={classes['logo']}>
                    <g fill="none" fillRule="evenodd">
                        <path d="M20 340h180v100H20V340zm20-160h140v160H40V180zM60 20h100v160H60V20zm140 360h20v460h-20V380zM0 380h20v460H0V380zm20 400h180v80H20v-80z" fill="#3a1900"></path>
                        <path fill="#00AFDB" d="M20 440h180v340H20zM60 0h100v20H60z" className={classes['logo__label']}></path>
                    </g>
                </svg>
            </div>
            <div className={classes['bottle-face']}>
                <svg viewBox="0 0 220 860" xmlns="http://www.w3.org/2000/svg" className={classes['logo']}>
                    <g fill="none" fillRule="evenodd">
                        <path
                            d="M20 340h180v100H20V340zm20-160h140v160H40V180zM60 20h100v160H60V20zm140 360h20v460h-20V380zM0 380h20v460H0V380zm20 400h180v80H20v-80z"
                            fill="#3a1900"></path>
                        <path fill="#00AFDB" d="M20 440h180v340H20zM60 0h100v20H60z" className={classes['logo__label']}></path>
                    </g>
                </svg>
            </div>
            <div className={classes['bottle-face']}>
                <svg viewBox="0 0 220 860" xmlns="http://www.w3.org/2000/svg" className={classes['logo']}>
                    <g fill="none" fillRule="evenodd">
                        <path
                            d="M20 340h180v100H20V340zm20-160h140v160H40V180zM60 20h100v160H60V20zm140 360h20v460h-20V380zM0 380h20v460H0V380zm20 400h180v80H20v-80z"
                            fill="#3a1900"></path>
                        <path fill="#00AFDB" d="M20 440h180v340H20zM60 0h100v20H60z" className={classes['logo__label']}></path>
                    </g>
                </svg>
            </div>
            <div className={classes['bottle-face']}>
                <svg viewBox="0 0 220 860" xmlns="http://www.w3.org/2000/svg" className={classes['logo']}>
                    <g fill="none" fillRule="evenodd">
                        <path
                            d="M20 340h180v100H20V340zm20-160h140v160H40V180zM60 20h100v160H60V20zm140 360h20v460h-20V380zM0 380h20v460H0V380zm20 400h180v80H20v-80z"
                            fill="#3a1900"></path>
                        <path fill="#00AFDB" d="M20 440h180v340H20zM60 0h100v20H60z" className={classes['logo__label']}></path>
                    </g>
                </svg>
            </div>
        </div>
        <div className={classes['bottle__text']}>Приложуха с певком</div>
    </div>
)

export default Logo