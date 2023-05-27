import React from 'react'

const DropDown = ({submenus}) => {
  return (
    <div className="bottom_menus">
      {submenus.map((submenu, index) => (
        <li key={index} className="menu-items">
          <a href={submenu.url}>{submenu.title}</a>
        </li>
      ))}
    </div>
  )
}

export default DropDown