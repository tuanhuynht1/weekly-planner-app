import React from 'react';

const NavItem = ({offset, name, switchView, selected}) =>{
    const past = offset < 0;
    return (
        selected ?

            past ?
                <button className='nav-item-past nav-item-selected' onClick={() => switchView(offset)}>{name}</button> 
            :
                <button className='nav-item-ongoing nav-item-selected' onClick={() => switchView(offset)}>{name}</button>  
        :
            past ?
                <button className='nav-item-past' onClick={() => switchView(offset)}>{name}</button> 
            :
                <button className='nav-item-ongoing' onClick={() => switchView(offset)}>{name}</button>   
    )
}

export default NavItem;