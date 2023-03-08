import React from "react";
import "./Star.scss"

export default function Star() {
    return (
        <div className={"score-wrap"}>
            <span className="score" style={{"--_score":"50%"}}></span>
        </div>
    )
}