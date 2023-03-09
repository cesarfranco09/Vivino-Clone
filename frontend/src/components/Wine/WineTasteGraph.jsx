import React from "react";

const WineTasteGraph = ({left, right, point}) => {
    point = point >= 9 ? 9 : point;
    return (
        <div className={"wine-taste-content-grid"}>
            <div className={"graph-bar"}>
                <div>{left}</div>
                <div className={"center-wrap"}>
                    <div className={"center"}></div>
                    <div className={"center-point"} style={{left: point*10 + "%"}}></div>
                </div>
                <div>{right}</div>
            </div>
        </div>
    )
}

export default WineTasteGraph;