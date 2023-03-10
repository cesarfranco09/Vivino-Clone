import "./WineReview.scss"
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createRating} from "../../store/ratingReducer";

export default function WineReview({wineId, reviews}) {
    const sessionUser = useSelector(state => state.session.user);
    const [review, setReview] = useState("");
    const [reviewRating, setReviewRating] = useState(0);
    const dispatch = useDispatch();

    const submit = function () {
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
        window.location.reload();
        alert("Saved")
    }

    return (
        <div className={"wine-review"}>
            <div className={"wine-review-content"}>
                <p>
                    Community reviews
                </p>
                {reviews.length == 0 && (
                    <span>no review.</span>
                )}
                {reviews.map((review) => (
                    <div className={"review-list"}>
                        <div>
                            <div className={"review-list-content"}>
                                <div className={"star"}>
                                    <img className="userRating_ratingStar__lICVt"
                                         src="https://web-common.vivino.com/assets/userRatingStar/userStarsAllStates.svg#svgView(viewBox(0 0 29 28))"
                                         alt="User rated star FullStar" height="20" width="21" role="presentation"/>
                                    {review.rating}
                                </div>
                                {review.body}
                            </div>
                            <div className={"reviewer"}>
                                {/*<span className={"name"}>ABC</span>*/}
                                <span className={"date"}>{review.created_at.substring(0,10)}</span>
                            </div>
                        </div>
                    </div>
                ))}
                {sessionUser && (
                <div>
                    <div className={"review-write-wrap"}>
                        <p>WRITE REVIEW</p>
                        Rating: <select value={reviewRating} onChange={(event) => setReviewRating(event.target.value)}>
                        {[0,1,2,3,4,5,6,7,8,9,10].map((num) => (
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
