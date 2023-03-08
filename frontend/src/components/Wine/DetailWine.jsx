import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import useQuery from '../../utils/useQuery';
import "./DetailWine.scss"
import Star from "../../common/Star";
import WineTaste from "./WineTaste";
import WineReview from "./WineReview";
import axios from "axios";
import {useLocation} from "react-router-dom";

export default function DetailWine() {
    const dispatch = useDispatch();
    const query = useQuery();
    const wine_types = query.get("wine_types");    
    const filter = { "wine_types": [wine_types] }
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const [wine, setWine] = useState({});

    useEffect(() => {
        axios.get("/api/wines/"+ searchParams.get('id')).then(res => {
            setWine(res.data);
        })
    }, [dispatch, null]);

    const randomNumber = (Math.random() * 5).toFixed(1);
    const rating = Math.floor((Math.random() * 10000).toFixed(1));
    // const star = Math.floor((Math.random() * 100));
    // const star = randomNumber * 20;


    return (
    <div>
        <div className={"wine-detail"}>
            <div className={"wine-detail-wrap"}>
                <div>
                    <img className="image" onLoad="setImageSize(this)"
                         src={wine.image} height="500" width="114"
                         role="presentation"/>
                </div>
                <div className={"wine-detail-desc"}>
                    <h3 className={"company-name"}>{wine.winery}</h3>
                    <h1 className={"wine-name"}>{wine.name}</h1>
                    <span className={"wine-manufacturing-year"}>{wine.year}</span><br/>
                    <ul>
                        <li>{wine.country} </li>
                        <li>{wine.grape} </li>
                        <li>{wine.region} </li>
                        <li>{wine.wine_type} </li>
                    </ul>

                    <div>
                        <div className={"rate-score"}>{randomNumber}</div>
                        <div className={"rate-score-desc"}>
                            <Star point={randomNumber*20} width={true}/>
                            <br/>
                            {rating} ratings
                        </div>
                    </div>

                    <br/>

                    <a className={"rate-add-wish"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" data-acsb-hidden="true" data-acsb-force-hidden="true"><path d="M18.75,21V4.8931A1.8423,1.8423,0,0,0,16.9752,3h-9.95A1.8423,1.8423,0,0,0,5.25,4.8931V21L12,15.6Z" fill="none" stroke="#1e1e1e" stroke-linecap="round" stroke-linejoin="round" fill-rule="evenodd"></path></svg>
                        add to wishlist</a>
                </div>
                <div className={"price-box-wrapper"}>
                    <div className={"price-box"}>
                        <p className={"price-box-value"}>${wine.price}</p>
                        <span className={"price-box-value-desc"}>Average of all users-reported prices</span>
                        <hr className={"price-box-hr"}/><br/>
                        Add item to the cart
                    </div>
                </div>
            </div>
        </div>
        <WineTaste acidic={wine.acidic} bold={wine.bold} sweet={wine.sweet} tannic={wine.tannic} />
        <WineReview/>

    </div>

    )
}