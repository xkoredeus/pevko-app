import React from 'react'
import classes from './BeerItem.module.scss'
import {NavLink} from 'react-router-dom'
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

                <NavLink to={'/beer-list/' + props.beer.id} className="d-block w-50 mt-2">
                    <Button color="info" className="w-100">Подробнее</Button>
                </NavLink>
            </div>
        </div>
    )
}

export default BeerItem