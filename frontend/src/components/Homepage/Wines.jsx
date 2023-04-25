import './wines.scss';
import {useHistory} from "react-router-dom";
import Star from "../../common/Star";
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { useSelector, useDispatch } from 'react-redux';
import {fetchAllRatings, getRatings} from "../../store/ratingsReducer";
import { useEffect } from 'react';


const Wines = ({wines, slider}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const ratings = useSelector(getRatings);

    const wineRatings = {};

    const createRateObject = () => {
        let sum = 0;
        let count = 0;
        return {
          sum, count
        };
    };

    useEffect(() => {
        dispatch(fetchAllRatings());
    }, [dispatch]);
    // console.log("home_ratings", ratings);

    const setRatingsMap = () => {
        if (!ratings || ratings.length === 0) return;
        ratings.map((rating) => {
            if (wineRatings[rating.wine_id]) {
                wineRatings[rating.wine_id].sum += rating.rating;
                wineRatings[rating.wine_id].count += 1;
            } else {
                wineRatings[rating.wine_id] = createRateObject();
                wineRatings[rating.wine_id].sum = rating.rating;
                wineRatings[rating.wine_id].count = 1;
            }
        })
    }
    setRatingsMap();

    const avgRating = (wineId) => {
        const wineRating = wineRatings[wineId];
        if (!wineRating || wineRating.count === 0) {
          return '';
        }
        const average = wineRating.sum / wineRating.count;
        return average.toFixed(1);
    };
      
    const pageMove = function (id) {
        history.push("/wine?wineId=" + id);
        window.scrollTo(0, 0);
    }

    const leftMove = function () {
        document.querySelector("#" + slider).scrollBy({
            left: -1205,
            behavior: 'smooth'
        });
    }

    const rightMove = function () {
        document.querySelector("#" + slider).scrollBy({
            left: 1205,
            behavior: 'smooth'
        });
    }

    return (
        <div className="slider-container" id={slider}>
            {wines.map((wine) => {

                const ratingScore = avgRating(wine.id);

                return (
                    <div className="slider-item" onClick={() => pageMove(wine.id)} key={wine.id}>
                        <div>
                            <div className="slider-item-img">
                                <img src={wine.image} alt=""
                                />
                            </div>
                            <div className="slider-item-rating">
                                <span className="slider-item-rating-score">{ratingScore}</span><br/>
                                <span className="slider-item-rating-star">
                                    <Star point={ratingScore * 20}/>
                                </span><br/>
                                <span className="slider-item-rating-count">{!wineRatings[wine.id] ? 'No ratings yet' : wineRatings[wine.id].count + ' ratings'}</span><br/><br/>
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

export default Wines;