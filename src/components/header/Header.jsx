import React from 'react';
import {  AiOutlineMenu as IconMenu } from 'react-icons/ai';
import '../../styles/header-style.css'
import { MenuList } from './MenuList';
export const Header = () => {
  return (
    <header className="main__container">
      <div className=" header">
      <h2>LogoApp</h2>
      <span>Read Me</span>
      <IconMenu className="icon--menu"/>
      </div>
      <MenuList />
    </header>
  )
}
