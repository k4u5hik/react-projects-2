import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { isSubmenuOpen, closeSubmenu } = useGlobalContext()
  return (
    <aside className={isSubmenuOpen ? 'submenu show' : 'submenu'}>
      Submenu
    </aside>
  )
}

export default Submenu
