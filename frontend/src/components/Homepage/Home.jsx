import React, {useEffect, useState} from 'react'
import Wines from './Wines'
import './home.scss'
import {useDispatch, useSelector} from "react-redux";
import {fetchWineAll, getAllWines} from "../../store/winesReducer";

const Home = () => {
  const [filterWines, setFilterWines] = useState([]);
  const [topListSelection, setTopListSelection] = useState('$');

  const wines = useSelector(getAllWines);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWineAll());
  }, [dispatch]);

  useEffect(() => {
    changePriceOption('$');
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

  const changePriceOption = function (type) {
    let searchOption = [0,20];
    if (type === '$$') {
      searchOption = [20,40];
    } else if (type === '$$$') {
      searchOption = [40,80];
    } else if (type === '$$$$') {
      searchOption = [80,10000];
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
          <a className={'toplist-button icon1 ' + (topListSelection === '$'? 'active':'')} onClick={() => changePriceOption('$')}>
          </a>
          <a className={'toplist-button icon2 ' + (topListSelection === '$$'? 'active':'')} onClick={() => changePriceOption('$$')}>
          </a>
          <a className={'toplist-button icon3 ' + (topListSelection === '$$$'? 'active':'')} onClick={() => changePriceOption('$$$')}>
          </a>
          <a className={'toplist-button icon4 ' + (topListSelection === '$$$$'? 'active':'')} onClick={() => changePriceOption('$$$$')}>
          </a>
        </div>
        <div className='controls-text'>
          <p>{selectText(topListSelection)}</p>
          {wines && (
              <Wines wines={filterWines} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Home;