import React, { FC } from "react";

import { IPopularProps } from './type';

import PopularItem from "@/components/Popular/Popularitem";

import './styles.scss'

import { v4 as uuidv4 } from 'uuid';

const popular: FC<IPopularProps> = ({items, classname}) => {

    return (
        <div className={`popular ${classname}`}>
            <h2 className='popular__title'>Popular on TinyMoviez</h2>
            <div className='popular-items'>
                {
                    items.map(item => {
                        return (
                            <PopularItem {...item} key={uuidv4()}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default popular