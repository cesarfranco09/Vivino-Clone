import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  // let signupForm = <SignupFormModal
  //   setShowLoginModal={setShowLoginModal}
  //   showLoginModal={showLoginModal}
  //   setShowSignupModal={setShowSignupModal}
  //   showSignupModal={showSignupModal}
  //   />

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />
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
          // signupForm={signupForm}
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
    <div className="nav">
      <NavLink exact to="/">
        <div className="home-button"></div>
      </NavLink>
      {sessionLinks}
    </div>
  );
}

export default Navigation;
