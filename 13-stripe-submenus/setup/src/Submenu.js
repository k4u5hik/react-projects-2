import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext()
  const container = useRef(null)
  useEffect(() => {
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
  }, [location])
  return (
    <aside
      className={isSubmenuOpen ? 'submenu show' : 'submenu'}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center col-2`}>
        {links.map((links, index) => {
          const { url, icon, label } = links
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </aside>
  )
}

export default Submenu
