import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';

function SignupFormModal(prop) {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showModal, setShowModal] = useState(prop.showModal);


  const handleClose = ()=>{
    setShowModal(false);
    setShowSignupModal(false);
  }

  return (
    <>
      <button className='signup-button' onClick={() => setShowSignupModal(true)}></button>
      {showSignupModal && (
        <Modal onClose= {handleClose}>
          <SignupForm />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;