import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import {CATEGORIES} from "@/routes";
import {IHeaderProps} from './type';

import './styles.scss';
import {v4} from "uuid";

const Header: FC<IHeaderProps> = () => {

	return (
		<header className="header">
			<nav className="header-left">
				{
					CATEGORIES.map(category => (
						<NavLink className="header-left__item" to={category.url} key={v4()}>{category.title}</NavLink>
					))
				}
			</nav>
			<div className="header-right"></div>
		</header>
	);
};

export default Header;
