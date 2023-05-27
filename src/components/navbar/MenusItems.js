import React from 'react'
import { NavLink } from 'react-router-dom'
import DropDown from './DropDown'

const MenusItems = ({items}) => {
  return (
    <>
    {items.submenu ? (
        <>
          <button type="button" aria-haspopup="menu">
            {items.title}
          </button>
          <DropDown submenus={items.submenu} />
        </>
      ) : (
        <NavLink to='#' className='navlink'>{items.title}</NavLink>
      )}
    </>
  )
}

export default MenusItems