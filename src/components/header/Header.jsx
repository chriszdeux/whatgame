import React from 'react';
import { AiOutlineMenu as IconMenu } from 'react-icons/ai'

import '../../styles/header-style.css'
export const Header = () => {
  return (
    <header className="main__container header">
      <h2>LogoApp</h2>
      <span>Read Me</span>
      <IconMenu />
    </header>
  )
}
