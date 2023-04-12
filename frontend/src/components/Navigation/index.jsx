import React from 'react';
// import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import WineNavMenu from './WineNavMenu';
import './Navigation.css';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  let sessionLinks;
  
  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton
          user={sessionUser}
          setShowLoginModal={setShowLoginModal}
          showLoginModal={showLoginModal}
        />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal
          setShowLoginModal={setShowLoginModal}
          showLoginModal={showLoginModal}
          setShowSignupModal={setShowSignupModal}
          showSignupModal={showSignupModal}
        />
        <div className="fake-signup">
          <SignupFormModal
            setShowLoginModal={setShowLoginModal}
            showLoginModal={showLoginModal}
            setShowSignupModal={setShowSignupModal}
            showSignupModal={showSignupModal}
          />
        </div>
      </>
    );
  }

  return (
    <div className="nav-container">
      <nav className="nav">
        <div className="home-button" onClick={()=>{window.location.href = "/"}}></div>
        {sessionLinks}
      </nav>
      <div>
        <WineNavMenu />
      </div>
    </div>
  );
}

export default Navigation;
