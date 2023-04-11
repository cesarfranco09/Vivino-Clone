import React, {useEffect} from 'react';
import "./Profile.scss";
import {useDispatch, useSelector} from "react-redux";
import {fetchRatingAllUserId, getRatingsById} from "../../store/ratingReducer";
import { useHistory } from 'react-router-dom';

const Profile = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const reviews = useSelector(getRatingsById);

    useEffect(() => {
        dispatch(fetchRatingAllUserId());
    }, [dispatch, reviews]);

    const pageMoveWine = function (id) {
        history.push("/wine?wineId=" + id)
    }

    return (
        <div className={"my-reviews"}>
            <div className={"my-reviews-wrap"}>
                <p class={"title"}>My Reviews</p>
                <div className={"my-reviews-header"}>
                    <div className={"product"}>WINE</div>
                    <div className={"review"}>REVIEW</div>
                </div>
                {
                    reviews && reviews.map((review) => (
                        <div className={"my-reviews-list"}>
                            <div className={"img"} onClick={() => pageMoveWine(review.wine_id)}>
                                <img src={review.image} alt=""/>
                            </div>
                            <div className={"product"} onClick={() => pageMoveWine(review.wine_id)}>
                                {review.name}
                            </div>
                            <div className={"review"}>
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
                            <div className={"date"}>
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
