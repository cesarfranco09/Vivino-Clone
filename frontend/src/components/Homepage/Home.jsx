import React, {useEffect, useState} from 'react'
import Wines from './Wines'
import './home.scss'
import {useDispatch, useSelector} from "react-redux";
import {fetchWineAll, getAllWines} from "../../store/winesReducer";

const Home = () => {
  const [filterWines1, setFilterWines1] = useState([]);
  const [filterWines2, setFilterWines2] = useState([]);
  const [topListSelection1, setTopListSelection1] = useState('$');
  const [topListSelection2, setTopListSelection2] = useState('$');

  const wines = useSelector(getAllWines);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWineAll());
  }, [dispatch]);

  useEffect(() => {
    changePriceOption1('$');
  }, [wines]);

  useEffect(() => {
    changePriceOption2('$');
  }, [wines]);

  const selectText = (type) => {
    if (type === '$') {
      return "Best wines under $20 right now"
    } else if (type === '$$') {
      return "Best wines between $20 and $40 right now"
    } else if (type === '$$$') {
      return "Best wines between $40 and $80 right now"
    } else if (type === '$$$$') {
      return "Best wines over $80 right now"
    }
  }

  const changePriceOption1 = function (type) {
    let searchOption = [0,20];
    if (type === '$$') {
      searchOption = [20,40];
    } else if (type === '$$$') {
      searchOption = [40,80];
    } else if (type === '$$$$') {
      searchOption = [80,10000];
    }
    setFilterWines1(wines.filter((wine) => wine.price >= searchOption[0] && wine.price < searchOption[1]).slice(0, 16))
    setTopListSelection1(type);
    document.querySelector(".slider-container").scrollTo({left:0});
  }

  const changePriceOption2 = function (type) {
    let searchOption = [0,20];
    if (type === '$$') {
      searchOption = [20,40];
    } else if (type === '$$$') {
      searchOption = [40,80];
    } else if (type === '$$$$') {
      searchOption = [80,10000];
    }
    setFilterWines2(wines.filter((wine) => wine.price >= searchOption[0] && wine.price < searchOption[1]).slice(17, 32))
    setTopListSelection2(type);
    document.querySelector(".slider-container").scrollTo({left:0});
  }

  return (
    <>
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
            <a className={'toplist-button icon1 ' + (topListSelection1 === '$'? 'active':'')} onClick={() => changePriceOption1('$')}>
            </a>
            <a className={'toplist-button icon2 ' + (topListSelection1 === '$$'? 'active':'')} onClick={() => changePriceOption1('$$')}>
            </a>
            <a className={'toplist-button icon3 ' + (topListSelection1 === '$$$'? 'active':'')} onClick={() => changePriceOption1('$$$')}>
            </a>
            <a className={'toplist-button icon4 ' + (topListSelection1 === '$$$$'? 'active':'')} onClick={() => changePriceOption1('$$$$')}>
            </a>
          </div>
          <div className='controls-text'>
            <p>{selectText(topListSelection1)}</p>
            {wines && (
                <Wines wines={filterWines1} slider = {"slider-container1"}/>
            )}
          </div>
        </div>
      </div>

      <div className="topList">
        <div className='header'>
          <div className='headerTitle'>
            Top lists in USA
          </div>
          <div className='headerDesc'>
            Updated every Thursday
          </div>
        </div>

        <div className='country-toplist'>
          <div className='toplist-controls'>
            <a className={'toplist-button icon5 ' + (topListSelection2 === '$'? 'active':'')} onClick={() => changePriceOption2('$')}>
            </a>
            <a className={'toplist-button icon6 ' + (topListSelection2 === '$$'? 'active':'')} onClick={() => changePriceOption2('$$')}>
            </a>
            <a className={'toplist-button icon7 ' + (topListSelection2 === '$$$'? 'active':'')} onClick={() => changePriceOption2('$$$')}>
            </a>
            <a className={'toplist-button icon8 ' + (topListSelection2 === '$$$$'? 'active':'')} onClick={() => changePriceOption2('$$$$')}>
            </a>
          </div>
          <div className='controls-text'>
            <p>{selectText(topListSelection2)}</p>
            {wines && (
                <Wines wines={filterWines2} slider = {"slider-container2"}/>
            )}
          </div>
        </div>
      </div>
    </>
    
  )
}

export default Home;