import React from "react";
import "./Star.scss"

export default function Star({point, width}) {
    return (
        <div className={"score-wrap " + (width? "width": "")}>
            <span className="score" style={{"--_score": point + "%"}}></span>
        </div>
    )
}