import React, {useEffect, useState} from 'react';
import {localStorageCartData} from "../../utils/localStorageUtils";
import "./Profile"
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {fetchWineAll, getAllWines} from "../../store/winesReducer";

const Profile = () => {
    const [reviews, setReviews] = useState([]);
    const sessionUser = useSelector(state => state.session.user);


    const wines = useSelector(getAllWines)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWineAll());
    }, [dispatch]);

    useEffect(() => {
        axios.get("/api/rating").then(res => {
            setReviews(res.data.filter((review) => review.user_id === sessionUser.id).map((review) => {
                const wine = wines.filter((wine) => wine.id === review.wine_id)[0]
                return {
                ...review,
                    image: wine.image,
                    wine_name: wine.name
                }
            }))
        })
    }, [wines])

    const pageMove = function(id) {
        window.open("wine?id=" + id);
    }

    return (
        <div className={"new-cart"}>
            <div className={"new-cart-wrap"}>
                <p class={"title"}>My Reviews</p>
                <div className={"new-cart-header"}>
                    <div className={"product"}>PRODUCT</div>
                    <div className={"quantity"}>Review</div>
                </div>
                {
                    reviews.map((review) => (
                        <div className={"new-cart-list cursor"} onClick={() => pageMove(review.wine_id)}>
                            <div className={"img"}>
                                <img src={review.image} alt=""/>
                            </div>
                            <div className={"product"}>
                                {review.wine_name}
                            </div>
                            <div className={"quantity"}>
                                {review.body}
                            </div>
                            <div style={{width:"80px"}}>
                                <div className="star">
                                    <img className="userRating_ratingStar__lICVt"
                                         style={{marginBottom: "-4px", marginRight: "2px"}}
                                                           src="https://web-common.vivino.com/assets/userRatingStar/userStarsAllStates.svg#svgView(viewBox(0 0 29 28))"
                                                           alt="User rated star FullStar" height="20" width="21"
                                                           role="presentation"/>
                                    {review.rating}
                                </div>
                            </div>
                            <div>
                                {review.created_at.substring(0,10)}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Profile;
