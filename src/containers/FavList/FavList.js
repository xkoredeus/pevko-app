import React from 'react'
import classes from './FavList.module.scss'

const FavList = props => {
    return (
        <div className={classes['FavList']}>
            <div className={['container']}>
                <h1>Список любимых певчанских</h1>
            </div>
        </div>
    )
}

export default FavList