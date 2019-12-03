import React from 'react'
import classes from './BeerItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { Button } from 'reactstrap'

const BeerItem = props => {
    return (
        <div className={['col-sm-4 mb-4']}>
            <div className={classes['BeerItem']}>
                <div className={classes['BeerItem__img']} style={{backgroundImage: `url(${props.beer.image})`}}></div>
                <div className={classes['BeerItem__ttl']}>{ props.beer.name }</div>
                <div className={classes['BeerItem__descr']}>{ props.beer.tag }</div>
                <Button
                    className={classes['BeerItem__btn'] + ' w-50 mt-3'}
                >
                    В любимое
                    <FontAwesomeIcon icon={faHeart} className="ml-2"/>
                </Button>
                <Button color="info" className="w-50 mt-2">В карточку</Button>
            </div>
        </div>
    )
}

export default BeerItem