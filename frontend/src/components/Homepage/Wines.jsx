import './wines.scss'
import {useHistory} from "react-router-dom";
const Wines = () => {
    const history = useHistory();
    const pageMove = function (id) {
        history.push("/wine?id=" + id)
    }

    return (
        <div className="slider-container">
            {[1,2,3,4,5,6,7,8].map((num) => {
                return (
                    <div className="slider-item" onClick={() => pageMove(num)} key={num}>
                        <div>
                            <div className="slider-item-img">
                                <img src="https://vinevino-seeds.s3.us-west-1.amazonaws.com/red_1.png"
                                />
                            </div>
                            <div className="slider-item-rating">
                                <span className="slider-item-rating-score">4.3</span><br/>
                                <span className="slider-item-rating-star">stars</span><br/>
                                <span className="slider-item-rating-count">12345 ratings</span><br/><br/>
                                <span className="slider-item-rating-soldout">Sold out</span>
                                {/*<span className="slider-item-rating-but">buy</span>*/}
                            </div>
                        </div>
                        <div className="wine-info">
                            <p className="wine-company">company</p>
                            <p className="wine-name"> product name</p>
                            <p className="wine-origin">region</p>
                        </div>
                    </div>
                )
            })}
            <button className="prev-btn">&lt;</button>
            <button className="next-btn">></button>
        </div>
    )
}

export default Wines