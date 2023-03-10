import React, {useState} from 'react';
import {Modal} from '../../context/Modal';
import LoginForm from './LoginForm';
import SignupFormModal from '../SignupFormModal';
import DemoLogin from './DemoLogin';
import {deleteCart, localStorageCartData} from "../../utils/localStorageUtils";


function LoginFormModal({setShowLoginModal, showLoginModal, setShowSignupModal, showSignupModal}) {
  const [cartShow, setCartShow] = useState(false);
  const [cartItems, setCartItems] = useState([])

    const openCart =() => {
        setCartShow(!cartShow);
        setCartItems(localStorageCartData());
    }

    const deleteCartItem = function(id) {
        deleteCart(id);
        setCartItems(localStorageCartData());
    }

    document.addEventListener("click", function(event) {
        const cart = document.getElementById("cartDiv");
        const cartBtn = document.getElementById("cartBtn");

        if (event.target !== cart && event.target.parentNode !== cart && event.target !== cartBtn  && !event.target.classList.contains("deleteBtn")) {
            setCartShow(false);
        }
    });

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
        <div id="cartBtn" className={"cart"}  onClick={openCart}></div>
        {cartShow && (
            <ul id="cartDiv" className="cart-dropdown">
                {cartItems.length === 0 ? "" : (
                    <div className={"cart-wrap title"}>
                        <div>
                            Name
                        </div>
                        <div className={"p-center"}>
                            Count
                        </div>
                        <div>
                            Price
                        </div>
                    </div>
                )}
                {cartItems.length === 0 ? (<p>You have no item in shopping cart</p>) : (
                    cartItems.map((cart)=> (
                        <div className={"cart-wrap"}>
                            <div>
                                {cart.name}
                            </div>
                            <div className={"p-center"}>
                                {cart.count}
                            </div>
                            <div>
                                ${cart.price * cart.count}
                                <button id="deleteBtn" onClick={()=>deleteCartItem(cart.id)} className={"deleteBtn"}>X</button>
                            </div>
                        </div>
                    ))
                )}
                {cartItems.length === 0 ? "" : (
                    <>
                        <hr/>
                        <div className={"cart-wrap title"}>
                            <div>
                            </div>
                            <div className={"p-center"}>
                                {cartItems.reduce((acc, curr) => acc + curr.count, 0)}
                            </div>
                            <div>
                                ${cartItems.reduce((acc, curr) => acc + (curr.price * curr.count), 0)}
                            </div>
                        </div>
                        <li>
                            <a href="/cart"><button>Go to cart</button></a>
                        </li>
                    </>
                )}
            </ul>
        )}
    </>
  );
}

export default LoginFormModal;