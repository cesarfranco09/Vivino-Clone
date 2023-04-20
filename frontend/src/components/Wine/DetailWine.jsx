import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import "./DetailWine.scss"
import Star from "../../common/Star";
import WineTaste from "./WineTaste";
import WineReview from "../Rating/WineReview";
import {useLocation} from "react-router-dom";
import {addCart} from "../../utils/localStorageUtils"
import {fetchWine} from "../../store/winesReducer";
import {getWine} from "../../store/wine";
import {fetchRatingAllWineId, getRatings} from "../../store/ratingsReducer";
import {Modal} from '../../context/Modal';
import LoginForm from '../LoginFormModal/LoginForm';
import SignupFormModal from '../SignupFormModal';
import {deleteCart, localStorageCartData, saveCartData} from "../../utils/localStorageUtils";

export default function DetailWine() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const location = useLocation();

    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [cartShow, setCartShow] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const searchParams = new URLSearchParams(location.search);
    const wineId = searchParams.get('wineId');

    let wine = useSelector(getWine(wineId));
    let ratings = useSelector(getRatings);

    ratings.sort((a, b) => {
      if (a.created_at > b.created_at) {
        return -1;
      }
      if (a.created_at < b.created_at) {
        return 1;
      }
      return 0;
    });

    useEffect(() => {
        if (wineId) {
            dispatch(fetchWine(wineId))
        }
    }, [dispatch, wineId])

    useEffect(() => {
        if (wineId) {
            dispatch(fetchRatingAllWineId(wineId))
        }
    }, [dispatch, wineId]);

    const avgRating = (ratings) => {
        if (ratings.length === 0) return;
        let sum = 0;
        ratings.map((rating)=>(sum += rating.rating));
        const average = sum / ratings.length;
        return average.toFixed(1);
    }

    const rating = avgRating(ratings);
    const star = rating * 20;

    const openCart = () => {
        setCartShow(!cartShow);
        setCartItems(localStorageCartData());
    }

    const addToCart = function () {
        addCart(wine);
        openCart();
        // alert("Added to cart");
    }

    const plus = (cart, value, e) => {
      if (value === -1 && cart.count === 1) return e.stopPropagation();
      const updateItem = cartItems.map((wine) => {
          if(wine.id === cart.id) {
              return { ...wine, count: wine.count+value}
          }
          return wine;
      })
      setCartItems(updateItem);
      saveCartData(updateItem);
      e.stopPropagation();
    };
  
    const deleteCartItem = (id, e) => {
      deleteCart(id);
      setCartItems(localStorageCartData());
      e.stopPropagation();
    }

    useEffect(() => {
        if (!cartShow) return;
        const closeMenu = () => {
          setCartShow(false);
        };
    
        document.addEventListener('click', closeMenu);
        return () => document.removeEventListener("click", closeMenu);
    }, [cartShow]);

    return (
    <div>
        {wine && (
        <>
            <div className={"wine-detail"}>
                <div className={"wine-detail-wrap"}>
                    <div>
                        <img className="image" 
                             src={wine.image} height="500" width="114"
                             role="presentation"/>
                    </div>
                    <div className={"wine-detail-desc"}>
                        <h3 className={"company-name"}>{wine.winery}</h3>
                        <h1 className={"wine-name"}>{wine.name}</h1>
                        <span className={"wine-manufacturing-year"}>{wine.year}</span><br/>
                        <ul>
                            <li>{wine.country} </li>
                            <li>{wine.region} </li>
                            <li>{wine.wine_type.charAt(0).toUpperCase() + wine.wine_type.slice(1)} </li>
                            <li>{wine.grape} </li>
                        </ul>

                        <div>
                            <div className={"rate-score"}>{rating}</div>
                            <div className={"rate-score-desc"}>
                                <Star point={star} width={true}/>
                                <br/>
                                {ratings.length === 0 ? "No ratings yet" : `${ratings.length} ratings`}
                            </div>
                        </div>

                        <br/>

                        {/* <a className={"rate-add-wish"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" data-acsb-hidden="true" data-acsb-force-hidden="true"><path d="M18.75,21V4.8931A1.8423,1.8423,0,0,0,16.9752,3h-9.95A1.8423,1.8423,0,0,0,5.25,4.8931V21L12,15.6Z" fill="none" stroke="#1e1e1e" stroke-linecap="round" stroke-linejoin="round" fill-rule="evenodd"></path></svg>
                            add to wishlist</a> */}
                    </div>
                    <div className={"price-box-wrapper"}>
                        <div className={"price-box"}>
                            <p className={"price-box-value"}>${wine.price}</p>
                            <span className={"price-box-value-desc"}>Price per bottle</span>
                            <hr className={"price-box-hr"}/><br/>
                            {sessionUser ? (
                                <>
                                <button onClick={addToCart}>Add to Cart</button>
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
                                      {cartItems.length === 0 ? (<p>Your cart is empty</p>) : (
                                          cartItems.map((cart)=> (
                                            <div className={"cart-wrap"}>
                                              <div className="cart-name">
                                                {cart.name}
                                              </div>
                                              <div className={"p-center"}>
                                                <button className={"plusBtn"} onClick={(e)=>plus(cart, -1, e)}>-</button>
                                                {cart.count}
                                                <button className={"minusBtn"} onClick={(e)=>plus(cart, 1, e)}>+</button>
                                              </div>
                                              <div>
                                                ${cart.price * cart.count}
                                                <button id="deleteBtn" onClick={(e)=>deleteCartItem(cart.id, e)} className={"deleteBtn"}>X</button>
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
                                ) : (
                                    <>
                                    <button onClick={()=> setShowLoginModal(true)}>Login to purchase</button>
                                    {showLoginModal && (
                                        <>
                                        <Modal className='modal' style={{ display: "block" }} onClose={() => setShowLoginModal(false)} size="login">
                                            <LoginForm />
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
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <WineTaste acidic={wine.acidic} bold={wine.bold} sweet={wine.sweet} tannic={wine.tannic} />
        </>
        )}
        {(ratings && wine) && (
          <WineReview wineId={wine.id} reviews={ratings}/>
        )}
        <div className="fake-signup">
          <SignupFormModal
            setShowLoginModal={setShowLoginModal}
            showLoginModal={showLoginModal}
            setShowSignupModal={setShowSignupModal}
            showSignupModal={showSignupModal}
          />
        </div>
    </div>
    )
}