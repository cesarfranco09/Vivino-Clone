import React, {useEffect, useState} from 'react';
import "./Cart.scss"
import {deleteCart, deleteCartAll, localStorageCartData, saveCartData} from "../../utils/localStorageUtils";
import { Modal } from '../../context/Modal';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [showAboutLink, setShowAboutLink] = useState(false);


    useEffect(() => {
        setCartItems(localStorageCartData());
    }, []);

    const plus = function (cart, value) {
        if (value === -1 && cart.count === 1) return;
        const updateItem = cartItems.map((wine) => {
            if(wine.id === cart.id) {
                return { ...wine, count: wine.count+value}
            }
            return wine;
        })
        setCartItems(updateItem);
        saveCartData(updateItem);
    };

    const del = function(cart) {
        deleteCart(cart.id)
        setCartItems(localStorageCartData());
    }

    const checkOut = function() {
        if (cartItems.length === 0 ) {
            alert("At least one item needs to be in cart")
            return;
        }
        // alert("Purchase completed"); //new modal
        deleteCartAll();
        setShowAboutLink(true);
        // window.location.href = "/";
        // order page로 이동??..
    }

  return (
    <div className={"new-cart"}>
      <div className={"new-cart-wrap"}>
        <div className={"new-cart-header"}>
            <div className={"product"}>PRODUCT</div>
            <div className={"quantity"}>QUANTITY</div>
            <div className={"price"}>ITEM PRICE</div>
            <div className={"total"}>TOTAL</div>
        </div>
      {
          cartItems.length === 0 ? (<div className={"new-cart-list"}><p>Your cart is empty</p></div>):cartItems.map((cart) => (
              <div className={"new-cart-list"}>
                  <div className={"img"}>
                      <img src={cart.image} alt=""/>
                  </div>
                  <div className={"product"}>{cart.name} - {cart.grape} {cart.year}</div>
                  <div className={"quantity"}>
                      <button className={"r-m-10"} onClick={()=>plus(cart, -1)}>-</button>
                      {cart.count}
                      <button className={"l-m-10"} onClick={()=>plus(cart, 1)}>+</button>
                      <button className={"l-m-10"} onClick={()=>del(cart)}>X</button>
                  </div>
                  <div className={"price"}>${cart.price}</div>
                  <div className={"total"}>${cart.count*cart.price}</div>
              </div>
          ))
      }

      <div className={"checkout"}>
        <div className={"total"}>TOTAL ${cartItems.reduce((acc, curr) => acc + (curr.price*curr.count), 0)}</div>
        <div className={"checkout"}>
            <button onClick={checkOut}>CHECK OUT</button>
            {showAboutLink && (
                <Modal id="about-link-modal" size="about-link" onClose={()=> {setShowAboutLink(false); window.location.href = "/"}}>
                    <div className="profile-section">
                        <div className="profile-container">
                            <h2 className="purchase">Purchase Completed!</h2>
                            <h3>Thank you for visiting</h3>
                            <div className="about-icons">
                                <a className='linkedin' href="https://www.linkedin.com/in/kristin-lee-9a8666265/" target="_blank"></a>
                                <a className='github' href="https://github.com/totorasora" target="_blank"></a>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
      </div>

      </div>
    </div>
  );
};

export default Cart;

