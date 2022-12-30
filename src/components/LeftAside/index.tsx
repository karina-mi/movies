import React, {FC} from 'react';

import AsideMenu from "@/components/LeftAside/AsideMenu";

import ROUTES from "@/routes";
import {ReactComponent as Logo} from '@/assets/icons/logo.svg';

import './styles.scss';
import {NavLink} from "react-router-dom";
import {ROUTER_URLS} from "@/routes/type";

const LeftAside: FC = () => {
	return (
		<aside className="left-aside">
			<NavLink to={ROUTER_URLS.HOME} className="left-aside__logo">
				<Logo/>
			</NavLink>
			<nav className="left-aside-nav aside-nav">
				{
					ROUTES.map(route => {
							return (
								<AsideMenu route={route} key={route.label}/>
							)
						}
					)
				}
			</nav>
		</aside>
	);
};

export default LeftAside;
