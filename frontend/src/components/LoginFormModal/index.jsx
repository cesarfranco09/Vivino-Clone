import React from 'react';
import {Modal} from '../../context/Modal';
import LoginForm from './LoginForm';
import SignupFormModal from '../SignupFormModal';

function LoginFormModal({setShowLoginModal, showLoginModal, setShowSignupModal, showSignupModal}) {

  return (
    <>
      <button className='login-profile-button' onClick={() => setShowLoginModal(true)}></button>
      {showLoginModal && (
        <>
          <Modal className='modal' style={{ display: "block" }} onClose={() => setShowLoginModal(false)} size="login">
            <LoginForm />
            <br/>
            <div className='join-vinevino'>
              <p>Don't have a profile?</p>
              <p>
                <SignupFormModal
                  setShowLoginModal={setShowLoginModal}
                  showLoginModal={showLoginModal}
                  setShowSignupModal={setShowSignupModal}
                  showSignupModal={showSignupModal}
                />
              </p>
            </div>
          </Modal>
        </>
      )}
    </>
  );
}

export default LoginFormModal;