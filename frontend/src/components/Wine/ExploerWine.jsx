import "./ExploreWine.scss"
import Star from "../../common/Star";
import React, {useEffect, useState} from "react";
import {useLocation, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchWineAll, getAllWines} from "../../store/winesReducer";
import {addCart} from "../../utils/localStorageUtils";

export default function ExploreWine() {
    const location = useLocation();
    const history = useHistory();
    const searchParams = new URLSearchParams(location.search);
    const type = searchParams.get("type");
    const value = searchParams.get("value");

    // const [wines, setWines] = useState([]);
    const [filterWines, setFilterWines] = useState([]);
    const [wineCondition, setWineCondition] = useState([]);
    const [grapeCondition, setGrapeCondition] = useState([]);
    const [regionCondition, setRegionCondition] = useState([]);
    const [displayPrice, setDisplayPrice] = useState([0,0]);

    const wineTypes = ["Red", "White", "Rose", "Sparkling"];
    const grapeTypes = ['Pinot Noir', 'Cabernet Sauvignon', 'Merlot', 'Malbec', 'Syrah', 'Zinfandel', 'Grenache', 'Sauvignon Blanc', 'Chardonnay', 'Riesling'];
    const regionTypes = ["Napa Valley", "Bordeaux", "Tuscany", 'Mendoza', 'Rioja'];

    const wines = useSelector(getAllWines);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWineAll());
    }, [dispatch]);

    useEffect(() => {
        dataFilterInit();
    }, [wines]);

    useEffect(() => {
        dataFilter();
    }, [wineCondition, grapeCondition, regionCondition]);

    useEffect(() => {
        const minPrice = Math.min(...filterWines.map(obj => obj.price));
        const maxPrice = Math.max(...filterWines.map(obj => obj.price));
        setDisplayPrice([minPrice, maxPrice])
    }, [filterWines]);

    const dataFilterInit = function () {
        if (type === "wine") {
            setWineCondition([value.toLowerCase()])
        } else if (type === "grape") {
            setGrapeCondition([value.toLowerCase()])
        } else if (type === "region") {
            setRegionCondition([value.toLowerCase()])
        }
    };

    const dataFilter = function () {
        setFilterWines(null);
        let filterWine = wines
        if (wineCondition.length > 0) {
            filterWine = filterWine.filter((wine) => wineCondition.includes(wine.wine_type.toLowerCase()))
        }
        if (grapeCondition.length > 0) {
            filterWine = filterWine.filter((wine) => grapeCondition.includes(wine.grape.toLowerCase()));
        }
        if (regionCondition.length > 0) {
            filterWine = filterWine.filter((wine) => regionCondition.includes(wine.region.toLowerCase()));
        }
        setFilterWines(filterWine);
    };

    // const pageMove = function (id) {
    //     window.open("/wine?wineId=" + id, "")
    // };
    const pageMove = function (id) {
        history.push("/wine?wineId=" + id)
    }

    const wineConditionHandler = function(value) {
        if (wineCondition.includes(value.toLowerCase())) {
            setWineCondition(wineCondition.filter((wine) => wine !== value.toLowerCase()))
        } else {
            setWineCondition([...wineCondition, value.toLowerCase()])
        }
    };

    const grapeConditionHandler = function(value) {
        if (grapeCondition.includes(value.toLowerCase())) {
            setGrapeCondition(grapeCondition.filter((grape) => grape !== value.toLowerCase()))
        } else {
            setGrapeCondition([...grapeCondition, value.toLowerCase()])
        }
    };

    const regionConditionHandler = function(value) {
        if (regionCondition.includes(value.toLowerCase())) {
            setRegionCondition(regionCondition.filter((region) => region !== value.toLowerCase()))
        } else {
            setRegionCondition([...regionCondition, value.toLowerCase()])
        }
    };

    const addToCart = function (wine, e) {
        addCart(wine);
        alert("Added to cart"); //open cart
        e.preventDefault();
    };

    return (
        <div className={"content"}>
            <div>
                <p className={"title"}>Wines between ${displayPrice[0]} - ${displayPrice[1]} </p>
                {/*<p>From 1 regional wine style</p>*/}
            </div>
            <div className={"main-content"}>
                <div className={"search-wrap"}>
                    <div className={"search"}>
                        <div className={"search-condition"}>
                            <div className={"desc"}>Select multiple</div>
                            <p>Wine Types</p>
                            <div className={"button-wrap"}>
                                {wineTypes.map((wine) => {
                                    return (
                                        <button className={wineCondition.includes(wine.toLowerCase())?'active':''} onClick={() => wineConditionHandler(wine)}>{wine}</button>
                                    )
                                }) }
                            </div>
                        </div>
                    </div>

                    <div className={"search"}>
                        <div className={"search-condition"}>
                            <div className={"desc"}>Select multiple</div>
                            <p>Grapes</p>
                            <div className={"button-wrap"}>
                                {grapeTypes.map((grape) => {
                                    return (
                                        <button className={grapeCondition.includes(grape.toLowerCase())?'active':''} onClick={() => grapeConditionHandler(grape)}>{grape}</button>
                                    )
                                }) }
                            </div>
                        </div>
                    </div>

                    <div className={"search"}>
                        <div className={"search-condition"}>
                            <div className={"desc"}>Select multiple</div>
                            <p>Regions</p>
                            <div className={"button-wrap"}>
                                {regionTypes.map((region) => {
                                    return (
                                        <button className={regionCondition.includes(region.toLowerCase())?'active':''} onClick={() => regionConditionHandler(region)}>{region}</button>
                                    )
                                }) }
                            </div>
                        </div>
                    </div>
                </div>


                <div className={"list"}>
                    { filterWines && filterWines.slice(0,20).map((wine) => {
                        const randomNumber = (Math.random() * 2 + 3).toFixed(1);
                        const rating = Math.floor((Math.random() * 10).toFixed(1));
                        const star = randomNumber * 20;

                        return (
                            <div className={"item"}>
                                <div className={"img"} onClick={() => pageMove(wine.id)}>
                                    <img src={wine.image} alt=""/>
                                </div>
                                <div className={"desc"} onClick={() => pageMove(wine.id)}>
                                    <div className="wine-info">
                                        <p className="wine-company">{wine.winery}</p>
                                        <p className="wine-name">{wine.name}</p>
                                        <p className="wine-origin">{wine.country}</p>
                                        {/*<div className={"discount"}>Among top 2% of all wines in the world</div>*/}
                                    </div>
                                </div>
                                <div className={"rate-price"}>
                                    <div>
                                        <div className={"rate-score"}>{randomNumber}</div>
                                        <div className={"rate-score-desc"}>
                                            <Star point={star}/>
                                            <br/>
                                            {rating} ratings

                                            <br/>
                                            <p className={"rate-score-price"}>
                                                ${wine.price}
                                            </p>
                                        </div>
                                        <button onClick={(event) => addToCart(wine, event)}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};