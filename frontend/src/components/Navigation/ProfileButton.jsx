import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import * as sessionActions from '../../store/session';

function ProfileButton({ user, setShowLoginModal, showLoginModal }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    setShowLoginModal(false);
  };

  return (
    <>
      <button className="login-profile-dropdown-button" onClick={openMenu}>
        <i className="fa-solid fa-user-circle" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li id="name">{user.name}</li>
          <li id="email">{user.email}</li>
          <li id="my-wines">My Wines</li>
          <li id="orders">Orders</li>
          <li id="profile">Profile</li>
          <li id="profile">Settings</li>
          <li>
            <NavLink exact to='/'>
              <button id="log-out-button" onClick={logout}>Log Out</button>
            </NavLink>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
