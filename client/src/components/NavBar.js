import React from 'react';
import NavItem from './NavItem'

const NavBar = ({today, switchView, view_date}) => {

    const current_day = today.getDay(); 
    const view_day = view_date.getDay();
	return (
		<div className='navbar'>
            <NavItem selected={view_day === 0} offset={0 - current_day} name={'SUN'} switchView={switchView}/>
            <NavItem selected={view_day === 1} offset={1 - current_day} name={'MON'} switchView={switchView}/>
            <NavItem selected={view_day === 2} offset={2 - current_day} name={'TUE'} switchView={switchView}/>
            <NavItem selected={view_day === 3} offset={3 - current_day} name={'WED'} switchView={switchView}/>
            <NavItem selected={view_day === 4} offset={4 - current_day} name={'THU'} switchView={switchView}/>
            <NavItem selected={view_day === 5} offset={5 - current_day} name={'FRI'} switchView={switchView}/>
            <NavItem selected={view_day === 6} offset={6 - current_day} name={'SAT'} switchView={switchView}/>
		</div>
	);
};



export default NavBar;