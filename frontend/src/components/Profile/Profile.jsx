import React, {useEffect} from 'react';
import "./Profile.scss";
import {useDispatch, useSelector} from "react-redux";
import {fetchRatingAllUserId, getRatings} from "../../store/ratingsReducer";
import { useHistory } from 'react-router-dom';
import UpdateDeleteButtons from '../Rating/UpdateDeleteButtons';

const Profile = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const reviews = useSelector(getRatings);

    useEffect(() => {
        dispatch(fetchRatingAllUserId());
    }, [dispatch, reviews]);

    const pageMoveWine = function (id) {
        history.push("/wine?wineId=" + id);
        window.scrollTo(0, 0);
    }

    return (
        <div className={"my-reviews"}>
            <div className={"my-reviews-wrap"}>
                <p class={"title"}>My Wines</p>
                <div className={"my-reviews-header"}>
                    <div className={"product"}>WINE</div>
                    <div className={"review"}>REVIEW</div>
                </div>
                {(!reviews || reviews.length === 0) && (
                    <div className={"my-reviews-list-none"}>
                        <div>
                        </div>
                        <div className={"product"}>
                            <p></p>
                        </div>
                        <div className={"review"}>
                            <p>No reviews</p>
                        </div>
                    </div>
                )}
                {reviews && reviews.map((review) => (
                    <div className={"my-reviews-list"}>
                        <div className={"img"} onClick={() => pageMoveWine(review.wine_id)}>
                            <img src={review.image} alt=""/>
                        </div>
                        <div className={"product"} onClick={() => pageMoveWine(review.wine_id)}>
                            <p>{review.year}</p>
                            <p>{review.name}</p>
                        </div>
                        <div className={"review"}>
                            <span>{review.body}</span>
                            <span><UpdateDeleteButtons review={review} /></span>
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
