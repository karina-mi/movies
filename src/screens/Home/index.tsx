import React, { FC } from 'react';
import {HeroSlider, Popular} from "@/components";
import {useAppSelector} from "@/store/hooks";
import "./styles.scss"


const Home: FC = () => {

  const items = useAppSelector(state => state.movies.data.movies).filter((_, i) => i !==0)

  return (
    <div className='home-page'>
        <HeroSlider classname={'home-page-__slider'}/>
      <Popular items={items} classname='home-page__popular'/>
    </div>
  );
};

export default Home;
