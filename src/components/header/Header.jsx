import React, { useState } from 'react';
import {  FiMenu as IconMenu } from 'react-icons/fi';
import { useShowContent } from '../../hooks/useShowContent';
import '../../styles/header-style.css'
import { MenuList } from './MenuList';
import { Navbar } from './Navbar';
export const Header = () => {
  const [showContent, handleToggleContent] = useShowContent();
  return (
    <header className="main__container">
      <div className="header">
        <h2>LogoApp</h2>
        {/* <IconMenu 
          onClick={ handleToggleContent }
          className="icon--menu"
        /> */}
        <button onClick={ handleToggleContent }>menu</button>
        <Navbar />
      </div>
      {showContent && <MenuList useShowContent={ useShowContent }/>}
    </header>
  )
}
