import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import SignupFormModal from '../SignupFormModal';
import { Link } from 'react-router-dom';
import DemoLogin from './DemoLogin';


function LoginFormModal({setShowLoginModal, showLoginModal, setShowSignupModal, showSignupModal}) {

  return (
    <>
      <button className='login-profile-button' onClick={() => setShowLoginModal(true)}></button>
      {showLoginModal && (
        <>
          <Modal className='modal' style={{ display: "block" }} onClose={() => setShowLoginModal(false)}>
            <LoginForm />
            <br/>
            <div>
              <DemoLogin />
            </div>
            <br/>
            <label className='join-vinevino'>
              Don't have a profile?<br/>
              <SignupFormModal
                setShowLoginModal={setShowLoginModal}
                showLoginModal={showLoginModal}
                setShowSignupModal={setShowSignupModal}
                showSignupModal={showSignupModal}
              />
            </label>
          </Modal>
        </>
      )}
    </>
  );
}

export default LoginFormModal;