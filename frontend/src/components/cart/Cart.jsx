import React, {useEffect, useState} from 'react';
import "./Cart.scss"
import {deleteCart, deleteCartAll, localStorageCartData} from "../../utils/localStorageUtils";

const Cart = () => {
    const [cartItems, setCartItems] = useState([])
    useEffect(() => {
        setCartItems(localStorageCartData());
    }, []);

    const plus = function (cart, value) {
        if (value == -1 && cart.count === 1) return;
        const updateItem  = cartItems.map((wine) => {
            if(wine.id === cart.id) {
                return { ...wine, count: wine.count+value}
            }
            return wine;
        })
        setCartItems(updateItem);
    };

    const del = function(cart) {
        if (cartItems.length === 1 ) {
            alert("장바구니에 있는 모든 아이템을 삭제할수 없습니다.")
            return;
        }

        deleteCart(cart.id)
        setCartItems(localStorageCartData());
    }

    const checkout = function() {
        alert("checkout 되었습니다..");
        deleteCartAll();
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
          cartItems.map((cart) => (
              <div className={"new-cart-list"}>
                  <div className={"img"}>
                      <img src={cart.image} alt=""/>
                  </div>
                  <div className={"product"}>{cart.name} - {cart.grape} {cart.year}</div>
                  <div className={"quantity"}>
                      <button className={"r-m-10"} onClick={()=>plus(cart, -1)}>-</button>
                      {cart.count}
                      <button className={"l-m-10"} onClick={()=>plus(cart, 1)}>+</button>
                      <button className={"l-m-10"} onClick={()=>del(cart)}>DEL</button>
                  </div>
                  <div className={"price"}>${cart.price}</div>
                  <div className={"total"}>{cart.count*cart.price}</div>
              </div>
          ))
      }

      <div className={"checkout"}>
          <div className={"total"}>TOTAL ${cartItems.reduce((acc, curr) => acc + (curr.price*curr.count), 0)}</div>
          <div className={"checkout"}><button onclick={() => checkout()}>CHECK OUT</button></div>
      </div>

      </div>
    </div>
  );
};

export default Cart;
