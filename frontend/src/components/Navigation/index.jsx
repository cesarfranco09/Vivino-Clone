import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <LoginFormModal
        setShowLoginModal={setShowLoginModal}
        showLoginModal={showLoginModal}
        setShowSignupModal={setShowSignupModal}
        showSignupModal={showSignupModal}
      />

    );
  }

  return (
    <div className="nav">
      <NavLink exact to="/">
        <div className="home-button"></div>
      </NavLink>
      {sessionLinks}
    </div>
  );
}

export default Navigation;
