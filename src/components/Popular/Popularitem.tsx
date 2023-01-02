import React, {FC} from "react";

import {IPopularItem} from './type'

import {ReactComponent as Star} from "@/assets/icons/star.svg";
import {ReactComponent as  HalfStar} from "@/assets/icons/half-star.svg";
import {Button} from "@/components";
import {v4} from "uuid";

const PopularItem: FC<IPopularItem> = item => {
    let rating = Math.floor(item.rating),
    isHalfStar = item.rating - rating

    return (
        <div className='popular-item'>
            <div className='popular-item-img'>
                <img className='popular-item' src={require(`../../assets/images/${item.img}`)} alt={item.title}/>
            </div>
            <div className='popular-item__header'>
                <span className='popular-item__title'>{item.title}</span>
                {
                    item.rating &&

            <div className='popular-item__rating'>
                {
                    new Array(rating).fill(rating).map(_ => {
                        return <Star key={v4()}/>
                    })
                }
                {
                    !!isHalfStar && <HalfStar/>
                }
            </div>
                }
            </div>
            <div className='popular-item__footer'>
             <div className='popular-item__info'>
                <span>{item.genre}
                </span>
             </div>
                <div className='popular-item__action'>
                    <Button size={'drop'} color={'filter'} text={''}/>
                    <Button size={'small'} color={'primary'} text={'Watch'}/>
                </div>
            </div>
        </div>

    )

}

export default PopularItem