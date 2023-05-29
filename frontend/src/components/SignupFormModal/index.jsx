import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';

function SignupFormModal({setShowLoginModal, showLoginModal, setShowSignupModal, showSignupModal}) {

  const handleClick = () => {
    setShowLoginModal(false);
    setShowSignupModal(true);
  }

  const handleClose = ()=>{
    setShowLoginModal(false);
    setShowSignupModal(false);
  }

  return (
    <>
      <button className='signup-button' onClick={()=>handleClick()}>Join Vinevino</button>
      {showSignupModal && (
        <Modal onClose={handleClose} size="login">
          <SignupForm />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;