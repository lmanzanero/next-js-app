import  BellIcon from '../public/icons/bell.svg';
import  MessengerIcon from '../public/icons/messenger.svg';
import  CaretIcon from '../public/icons/caret.svg';
import  PlusIcon from '../public/icons/plus.svg';
import  CogIcon  from '../public/icons/cog.svg';
import  ChevronIcon from '../public/icons/chevron.svg';
import  ArrowIcon  from '../public/icons/arrow.svg';
import  BoltIcon  from '../public/icons/bolt.svg';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { CSSTransition } from 'react-transition-group'; 

export default function Header () {
    return ( 
      <Navbar>  
        <NavItem>
          <DropdownMenu></DropdownMenu>
        </NavItem>
     </Navbar>  
    );
}

function Navbar(props) {
  return (
    <nav className="navbar"> 
      <Link href="/">
        <div className="nav-logo"> 
          <img src="/icons/ecocrypt-logo.png"/> 
        </div>
      </Link>
      <ul className="navbar-nav-left"> 
        <li><Link href="/explore">Explore</Link></li>
        <li><Link href="/community">Community</Link></li>
        <li><Link href="/news">News</Link></li>
      </ul>
      <ul className="navbar-nav-right"> 
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/register">Sign up</Link></li>
      </ul>
      {/* If Authenticated, show this one */}
      {/* <ul className="navbar-nav">{props.children}</ul> */}
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
         {props.icon} 
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button"><img src={props.leftIcon}/></span>
        {props.children}
        <span className="icon-right"><img src={props.rightIcon}/></span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
          
        <div className="menu">
          <DropdownItem><Link href="/explore">Explore</Link></DropdownItem>
          <DropdownItem><Link href="/community">Community</Link></DropdownItem>
          <DropdownItem><Link href="/news">News</Link></DropdownItem>
          <hr/>
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={CogIcon}
            rightIcon={ChevronIcon}
            goToMenu="settings">
            Settings
          </DropdownItem>
          {/* <DropdownItem
            leftIcon={ChevronIcon}
            rightIcon={ChevronIcon}
            goToMenu="animals">
            Animals
          </DropdownItem> */}

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={ArrowIcon}>
            <h2>My Settings</h2>
          </DropdownItem>
          <DropdownItem leftIcon={BoltIcon}>Account Details</DropdownItem>
          <DropdownItem leftIcon={BoltIcon}>My Stats</DropdownItem>
          {/* <DropdownItem leftIcon={BoltIcon}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={BoltIcon}>Awesome!</DropdownItem>  */}
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={ArrowIcon}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}