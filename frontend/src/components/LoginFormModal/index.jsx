import React from 'react';
import {Modal} from '../../context/Modal';
import LoginForm from './LoginForm';
import SignupFormModal from '../SignupFormModal';
import DemoLogin from './DemoLogin';


function LoginFormModal({setShowLoginModal, showLoginModal, setShowSignupModal, showSignupModal}) {
  // const [cartShow, setCartShow] = useState(false);

  // document.addEventListener("click", function(event) {
  //     const cart = document.getElementById("cartDiv");
  //     const cartBtn = document.getElementById("cartBtn");

  //     if (event.target !== cart && event.target.parentNode !== cart && event.target !== cartBtn  && !event.target.classList.contains("deleteBtn") && !event.target.classList.contains("plus-btn") && !event.target.classList.contains("minus-btn")) {
  //         setCartShow(false);
  //     }
  // });

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