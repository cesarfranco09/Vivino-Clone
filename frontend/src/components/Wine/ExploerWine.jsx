import "./ExploreWine.scss"
import Star from "../../common/Star";
import React, {useState} from "react";
import {useHistory} from "react-router-dom";

export default function ExploreWine() {
    const [wineCondition, setWineCondition] = useState([]);
    const [grapeCondition, setGrapeCondition] = useState([]);
    const [regionCondition, setRegionCondition] = useState([]);

    const wineTypes = ["Red", "White", "Rose", "Sparkling"]
    const grapeTypes = ["Cabernet Sauvignon", "Pinot Noir", "Chardonnay"]
    const regionTypes = ["Napa Valley", "Bordeaux", "Tuscany"]

    const pageMove = function (id) {
        window.open("/wine?id=" + id, "")
    }

    const wineConditionHandler = function(value) {
        if (wineCondition.includes(value)) {
            setWineCondition(wineCondition.filter((wine) => wine !== value))
        } else {
            setWineCondition([...wineCondition, value])
        }
    }

    const grapeConditionHandler = function(value) {
        if (grapeCondition.includes(value)) {
            setGrapeCondition(grapeCondition.filter((grape) => grape !== value))
        } else {
            setGrapeCondition([...grapeCondition, value])
        }
    }

    const regionConditionHandler = function(value) {
        if (regionCondition.includes(value)) {
            setRegionCondition(wineCondition.filter((region) => region !== value))
        } else {
            setRegionCondition([...regionCondition, value])
        }
    }

    return (
        <div className={"content"}>
            <div>
                <p className={"title"}>Wines</p>
                <p>From 1 regional wine style</p>
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
                                        <button className={wineCondition.includes(wine)?'active':''} onClick={() => wineConditionHandler(wine)}>{wine}</button>
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
                                        <button className={grapeCondition.includes(grape)?'active':''} onClick={() => grapeConditionHandler(grape)}>{grape}</button>
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
                                        <button className={regionCondition.includes(region)?'active':''} onClick={() => regionConditionHandler(region)}>{region}</button>
                                    )
                                }) }
                            </div>
                        </div>
                    </div>
                </div>


                <div className={"list"}>
                    { [0,1,2,3,4,5].map((num) => {
                        return (
                            <div className={"item"} onClick={() => pageMove(num)}>
                                <div className={"img"}>
                                    <img src="https://images.vivino.com/thumbs/Qe2T0uJqSb6sdDs6iApm1Q_pb_x300.png"/>
                                </div>
                                <div className={"desc"}>
                                    <div className="wine-info">
                                        <p className="wine-company">company</p>
                                        <p className="wine-name"> product name</p>
                                        <p className="wine-origin">region</p>
                                        <div className={"discount"}>Among top 2% of all wines in the world</div>
                                    </div>
                                </div>
                                <div className={"rate-price"}>
                                    <div>
                                        <div className={"rate-score"}>4.7</div>
                                        <div className={"rate-score-desc"}>
                                            <Star/>
                                            <br/>
                                            2747 ratings
                                        </div>
                                        <button>add to cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}