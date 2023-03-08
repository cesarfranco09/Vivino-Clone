import "./WineTaste.scss"
import React from "react";
import WineTasteGraph from "./WineTasteGraph";

export default function WineTaste() {
    return (
        <div className={"wine-taste"}>
            <div className={"wine-taste-content"}>
                <p>
                    What does this wine taste like?
                </p>
                <div className={"graph-bar-wrap"}>
                    <WineTasteGraph left={"Light"} right={"Bold"} point={1}></WineTasteGraph>
                    <WineTasteGraph left={"Smooth"} right={"Tannic"} point={1}></WineTasteGraph>
                    <WineTasteGraph left={"Dry"} right={"Sweet"} point={1}></WineTasteGraph>
                    <WineTasteGraph left={"Soft"} right={"Acidic"} point={1}></WineTasteGraph>
                </div>
            </div>
        </div>
    )
}
