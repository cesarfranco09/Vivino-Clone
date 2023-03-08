import React from 'react';
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import useQuery from '../../utils/useQuery';
import { fetchWines } from './winesReducer';
import "./DetailWine.scss"
import Star from "../../common/Star";
import WineTaste from "./WineTaste";
import WineReview from "./WineReview";

export default function DetailWine({wines}) {
    const dispatch = useDispatch();
    const query = useQuery();
    const wine_types = query.get("wine_types");    
    const filter = { "wine_types": [wine_types] }
  
    useEffect(() => {
      dispatch(fetchWines(filter));
    }, [dispatch, filter])


    return (
    <div>
        <div className={"wine-detail"}>
            <div className={"wine-detail-wrap"}>
                <div>
                    <img alt="Caymus Special Selection Cabernet Sauvignon" className="image" onLoad="setImageSize(this)"
                         src="//images.vivino.com/thumbs/5KyHuUOhTEungzvFPpdQJA_pb_x600.png" height="500" width="114"
                         role="presentation"/>
                </div>
                <div className={"wine-detail-desc"}>
                    <h3 className={"company-name"}>Caymus</h3>
                    <h1 className={"wine-name"}>Special Selection Cabernet Sauvignon</h1>
                    <span className={"wine-manufacturing-year"}>2016</span><br/>
                    <ul>
                        <li>United States </li>
                        <li>Napa Valley </li>
                        <li>Caymus </li>
                        <li>Red wine </li>
                        <li>Cabernet Sauvignon </li>
                    </ul>

                    <div>
                        <div className={"rate-score"}>4.7</div>
                        <div className={"rate-score-desc"}>
                            <Star/>
                            <br/>
                            2747 ratings
                        </div>
                    </div>

                    <br/>

                    <a className={"rate-add-wish"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" data-acsb-hidden="true" data-acsb-force-hidden="true"><path d="M18.75,21V4.8931A1.8423,1.8423,0,0,0,16.9752,3h-9.95A1.8423,1.8423,0,0,0,5.25,4.8931V21L12,15.6Z" fill="none" stroke="#1e1e1e" stroke-linecap="round" stroke-linejoin="round" fill-rule="evenodd"></path></svg>
                        add to wishlist</a>
                </div>
                <div className={"price-box-wrapper"}>
                    <div className={"price-box"}>
                        <p className={"price-box-value"}>$29.68</p>
                        <span className={"price-box-value-desc"}>Average of all users-reported prices</span>
                        <hr className={"price-box-hr"}/><br/>
                        add to cart
                    </div>
                </div>
            </div>
        </div>
        <WineTaste/>
        <WineReview/>

    </div>

    )
}