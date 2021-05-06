import React from 'react';
import {  AiOutlineMenu as IconMenu } from 'react-icons/ai';
import '../../styles/header-style.css'
import { MenuList } from './MenuList';
import { Navbar } from './Navbar';
export const Header = () => {
  return (
    <header className="main__container">
      <div className=" header">
        <h2>LogoApp</h2>
        {/* <IconMenu className="icon--menu"/> */}
        {/* <Navbar /> */}
      </div>
      <MenuList />
    </header>
  )
}
