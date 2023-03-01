import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';

function SignupFormModal({setShowLoginModal, showLoginModal, setShowSignupModal, showSignupModal}) {

  const handleClick = () => {
      // console.log("showLoginModal1", showLoginModal)
      // setShowLoginModal(false);
      // console.log("showLoginModal2", showLoginModal)
      setShowSignupModal(true);
  }

  const handleClose = ()=>{
    setShowLoginModal(false);
    setShowSignupModal(false);
  }

  return (
    <>
      {/* <a href="#" onclick={() => handleClick()}>Join Vivino</a> */}
      <button className='signup-button' onClick={handleClick}>Join Vivino</button>
      {showSignupModal && (
        <Modal onClose={handleClose}>
          <SignupForm />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;