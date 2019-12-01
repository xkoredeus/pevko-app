import React from 'react'
import classes from './BeerItem.module.scss'

const BeerItem = props => {
    return (
        <div className={['col-sm-4']}>
            <div className={classes['BeerItem']}>
                <div className={classes['BeerItem__img']} style={{backgroundImage: `url(${props.beer.image})`}}></div>
                <div className={classes['BeerItem__ttl']}>{ props.beer.title }</div>
                <div className={classes['BeerItem__descr']}>{ props.beer.description }</div>
                <button
                    type={['button']}
                    className={classes['BeerItem__btn']}
                >
                    В любимое певко
                </button>
            </div>
        </div>
    )
}

export default BeerItem