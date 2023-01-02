import React, {FC} from 'react';

import {IAsideMenuProps} from './type';
import {NavLink} from "react-router-dom";
import {v4} from "uuid";

const AsideMenu: FC<IAsideMenuProps> = ({route}) => {

	return (
		<div className="aside-nav__item aside-nav-item">
			<span className="aside-nav-item__title">{route.label}</span>
			<div className="aside-nav-item__links">
				{
					route.items.map(link => {
						const Icon = link.icon;
						return (
							<NavLink to={link.url} className="aside-nav-item__link" key={v4()}>
								<Icon/>
								<span>{link.title}</span>
							</NavLink>
						)
					})
				}
			</div>
		</div>
	);
};

export default AsideMenu;
