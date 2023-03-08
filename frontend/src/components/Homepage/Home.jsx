import React, {useEffect, useState} from 'react'
import Wines from './Wines'
import './home.scss'
import {useDispatch, useSelector} from "react-redux";
import winesReducer, {fetchWineAll, getAllWines, getWineById, receiveWine} from "../Wine/winesReducer";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  // const [wines, setWines] = useState([]);
  const [filterWines, setFilterWines] = useState([]);
  const [topListSelection, setTopListSelection] = useState('$');

  // useEffect(() => {
  //   axios.get("/api/wines").then(res => {
  //     setWines(res.data);
  //     setFilterWines(res.data.filter((wine) => wine.price >= 0 && wine.price < 20))
  //   })
  // }, [dispatch, null]);

  const wines = useSelector(getAllWines);
  // same as: const posts = useSelector((state) => (state.posts ? Object.values(state.posts) : [])

  useEffect(()=>{
    dispatch(fetchWineAll());
  }, [])

  const selectText = (type) => {
    if (type == '$') {
      return "Best wines under $20 right now"
    } else if (type == '$$') {
      return "Best wines between $20 and $40 right now"
    } else if (type == '$$$') {
      return "Best wines between $40 and $80 right now"
    } else if (type == '$$$$') {
      return "Best wines over $80 right now"
    }
  }

  const changePriceOption = function (type) {
    let searchOption = [0,20];
    if (type == '$$') {
      searchOption = [20,40];
    } else if (type == '$$$') {
      searchOption = [40,80];
    } else if (type == '$$$$') {
      searchOption = [80,100000];
    }
    setFilterWines(wines.filter((wine) => wine.price >= searchOption[0] && wine.price < searchOption[1]))
    setTopListSelection(type);
    document.querySelector(".slider-container").scrollTo({left:0});
  }

  return (
    <div className="topList">
      <div className='header'>
        <div className='headerTitle'>
          Top lists in California
        </div>
        <div className='headerDesc'>
          Updated every Thursday
        </div>
      </div>

      <div className='country-toplist'>
        <div className='toplist-controls'>
          <a className={'toplist-button icon1 ' + (topListSelection == '$'? 'active':'')} onClick={() => changePriceOption('$')}>
          </a>
          <a className={'toplist-button icon2 ' + (topListSelection == '$$'? 'active':'')} onClick={() => changePriceOption('$$')}>
          </a>
          <a className={'toplist-button icon3 ' + (topListSelection == '$$$'? 'active':'')} onClick={() => changePriceOption('$$$')}>
          </a>
          <a className={'toplist-button icon4 ' + (topListSelection == '$$$$'? 'active':'')} onClick={() => changePriceOption('$$$$')}>
          </a>
        </div>
        <div className='controls-text'>
          <p>{selectText(topListSelection)}</p>
          <Wines wines={filterWines}></Wines>
          {/*<Slider />*/}
        </div>
      </div>
    </div>
  )
}

export default Home