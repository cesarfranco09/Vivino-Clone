import './wines.scss';
import {useHistory} from "react-router-dom";
import Star from "../../common/Star";
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { useSelector, useDispatch } from 'react-redux';
import {fetchAllRatings, fetchRatingAllUserId, getRatings} from "../../store/ratingReducer";
import { useState, useEffect } from 'react';
import {fetchWine} from "../../store/winesReducer";
import {getWine} from "../../store/wine";


const Wines = ({wines}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const ratings = useSelector(getRatings);
    const [wineRatings, setWineRatings] = useState([]);

    useEffect(() => {
        dispatch(fetchAllRatings());
    }, [dispatch]);

    console.log("ratings", ratings)
    
    const pageMove = function (id) {
        history.push("/wine?wineId=" + id)
    }

    const leftMove = function () {
        document.querySelector(".slider-container").scrollBy({
            left: -1205,
            behavior: 'smooth'
        });
    }

    const rightMove = function () {
        document.querySelector(".slider-container").scrollBy({
            left: 1205,
            behavior: 'smooth'
        });
    }

    return (
        <div className="slider-container">
            {wines.map((wine) => {

                // const ratings = wineRatings[wine.id];
                // const ratings = Ratings(wine.id);

                const avgRating = (ratings) => {
                    if (!ratings || ratings.length === 0) return;
                    let sum = 0;
                    ratings.forEach((rating) => (sum += rating.rating));
                    const average = sum / ratings.length;
                    return average.toFixed(1);
                };

                return (
                    <div className="slider-item" onClick={() => pageMove(wine.id)} key={wine.id}>
                        <div>
                            <div className="slider-item-img">
                                <img src={wine.image} alt=""
                                />
                            </div>
                            <div className="slider-item-rating">
                                <span className="slider-item-rating-score">{avgRating(ratings)}</span><br/>
                                <span className="slider-item-rating-star">
                                    <Star point={avgRating(ratings)}/>
                                </span><br/>
                                <span className="slider-item-rating-count">{ratings.length === 0 ? 'No ratings yet' : ratings.length + 'ratings'}</span><br/><br/>
                                <span className="slider-item-rating-soldout">${wine.price}</span>
                            </div>
                        </div>
                        <div className="wine-info">
                            <p className="wine-company">{wine.winery}</p>
                            <p className="wine-name">{wine.name}</p>
                            <p className="wine-origin">{wine.region}</p>
                        </div>
                    </div>
                )
            })}
            <button className="prev-btn" onClick={leftMove}><SlArrowLeft /></button>
            <button className="next-btn" onClick={rightMove}><SlArrowRight /></button>
        </div>
    )
}

export default Wines