import "./WineReview.scss";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createRating, getRatings} from "../../store/ratingsReducer";
import UpdateDeleteButtons from "./UpdateDeleteButtons";

export default function WineReview({wineId, reviews}) {
    const sessionUser = useSelector(state => state.session.user);
    const [review, setReview] = useState("");
    const [reviewRating, setReviewRating] = useState(5);
    const dispatch = useDispatch();

    const showReview = (reviews) => {
        if (!sessionUser) return false;
    
        for (let i = 0; i < reviews.length; i++) {
            if (reviews[i].user_id === sessionUser.id) {
                return false;
            }
        }
        return true;
    }

    const submit = () => {
        if (review.trim() === "") {
            alert("Please enter a review");
            return;
        }

        const param = {
            rating: {
                rating: reviewRating,
                body: review,
                wine_id: wineId,
                user_id: sessionUser.id
            }
        }

        dispatch(createRating(param));
        dispatch(getRatings);
        initFrm();
        window.location.reload();
    }

    const initFrm = function () {
        setReviewRating(5);
        setReview("");
    }

    return (
        <div className={"wine-review"}>
            <div className={"wine-review-content"}>
                <p>
                    Community reviews
                </p>
                {reviews && reviews.length === 0 && (
                    <span>No reviews.</span>
                )}
                {reviews && reviews.map((review) => (
                    <div className={"review-list"}>
                        <div>
                            <div className={"review-list-content"}>
                                <div className={"star"}>
                                    <span>
                                        <img className="userRating_ratingStar__lICVt"
                                            src="https://web-common.vivino.com/assets/userRatingStar/userStarsAllStates.svg#svgView(viewBox(0 0 29 28))"
                                            alt="User rated star FullStar" height="20" width="21" role="presentation"/>
                                        {review.rating}
                                    </span>
                                    <span style={{marginLeft: "20px"}}></span>
                                    <span className={"name"}>By {review.name}</span>
                                </div>
                                <div className="review-body">
                                    <span>{review.body}</span>
                                    <span>{sessionUser?.id === review.user_id ? <UpdateDeleteButtons review={review} /> : <></>}</span>
                                </div>
                            </div>
                            <div className={"reviewer"}>
                                <span className={"date"}>{review.updated_at ? review.updated_at.substring(0,10) : review.created_at.substring(0,10)}</span>
                            </div>
                        </div>
                    </div>
                ))}
                {showReview(reviews) && (
                <div>
                    <div className={"review-write-wrap"}>
                        <p>WRITE REVIEW</p>
                        Rating:
                        <img className="userRating_ratingStar__lICVt"
                                src="https://web-common.vivino.com/assets/userRatingStar/userStarsAllStates.svg#svgView(viewBox(0 0 29 28))"
                                alt="User rated star FullStar" height="20" width="21" role="presentation"/>
                        <select value={reviewRating} onChange={(event) => setReviewRating(event.target.value)}>
                            {[0,1,2,3,4,5].map((num) => (
                                <option value={num}>{num}</option>
                            ))}
                        </select>
                        <button className={"review-submit"} onClick={submit}>SUBMIT</button>
                        <br/>
                        <p>
                            <textarea  id="" cols="100" rows="5" value={review} onChange={(event)=>setReview(event.target.value)}></textarea>
                        </p>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}
