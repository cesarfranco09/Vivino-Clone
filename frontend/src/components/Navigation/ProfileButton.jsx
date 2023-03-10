import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import * as sessionActions from '../../store/session';
import {deleteCart, localStorageCartData} from "../../utils/localStorageUtils";

function ProfileButton({ user, setShowLoginModal, showLoginModal }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [cartShow, setCartShow] = useState(false);
  const [cartItems, setCartItems] = useState([])
  
  const openMenu = () => {
    setShowMenu(!showMenu);
    setCartShow(false);
  };

  const openCart =() => {
    setCartShow(!cartShow);
    setShowMenu(false);
    setCartItems(localStorageCartData());
  }
  
  useEffect(() => {
    if (!showMenu) return;
    if (!cartShow) return;
    const closeMenu = () => {
      setShowMenu(false);
      setCartShow(false);
    };

    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu, cartShow]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    setShowLoginModal(false);

    setTimeout(() => {
      window.location.href = "/"
    },500)
  };
  // const logout = (e) => {
  //   e.preventDefault();
  //   dispatch(sessionActions.logout());
  //   setShowLoginModal(false);
  //   window.location.href = "/";
  // };

  const deleteCartItem = function(id) {
    deleteCart(id);
    setCartItems(localStorageCartData());
  }

  document.addEventListener("click", function(event) {
    const profile = document.getElementById("profileDiv");
    const cart = document.getElementById("cartDiv");
    const profileBtn = document.getElementById("profileBtn");
    const cartBtn = document.getElementById("cartBtn");

    if (event.target !== profile && event.target.parentNode !== profile && event.target !== profileBtn) {
      setShowMenu(false);
    }

    if (event.target !== cart && event.target.parentNode !== cart && event.target !== cartBtn  && !event.target.classList.contains("deleteBtn")) {
      setCartShow(false);
    }
  });

  return (
    <>
      <button id="profileBtn" className="login-profile-dropdown-button" onClick={openMenu}>
        <i className="fa-solid fa-user-circle" />
      </button>
      {showMenu && (
        <ul id="profileDiv" className="profile-dropdown">
          <li id="name">{user.name}</li>
          <li id="email">{user.email}</li>
          {/*<li id="my-wines">My Wines</li>*/}
          <li id="profile"><a href={"/profile"}>Profile</a></li>
          {/*<li id="profile">Settings</li>*/}
          <li>
            <hr/>
            <NavLink exact to='/'>
              <button id="log-out-button" onClick={logout}>Log Out</button>
            </NavLink>
          </li>
        </ul>
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

export default ProfileButton;
