import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import SignupFormModal from '../SignupFormModal';
import { Link } from 'react-router-dom';
import DemoLogin from './DemoLogin';


function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='login-profile-button' onClick={() => setShowModal(true)}></button>
      {showModal && (
        <>
          <Modal className='modal' style={{ display: "block" }} onClose={() => setShowModal(false)}>
            <LoginForm />
            <br/>
            <label>
              <DemoLogin />
            </label>
            <br/>
            <label className='join-vinevino'>
              Don't have a profile?<br/>
              Join Vinevino
              <SignupFormModal prop={showModal} />
            </label>
          </Modal>
        </>
      )}
    </>
  );
}

export default LoginFormModal;