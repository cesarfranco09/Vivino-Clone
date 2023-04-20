import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';

function SignupFormModal({setShowLoginModal, showLoginModal, setShowSignupModal, showSignupModal}) {

  // setShowLoginModal(true);
  // setShowSignupModal(false);

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
// function SignupFormModal() {

//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const [showSignupModal, setShowSignupModal] = useState(false);

//   const handleClick = (e) => {
//     e.preventDefault();
//     setShowLoginModal(false);
//     setShowSignupModal(true);
//   }

//   const handleClose = ()=>{
//     // e.preventDefault();
//     // setShowLoginModal(false);
//     setShowSignupModal(false);
//   }

//   return (
//     <>
//       <button className='signup-button' onClick={(e)=>handleClick(e)}>Join Vinevino</button>
//       {showSignupModal && (
//         <Modal onClose={handleClose} size="login">
//           <SignupForm />
//         </Modal>
//       )}
//     </>
//   );
// }

export default SignupFormModal;