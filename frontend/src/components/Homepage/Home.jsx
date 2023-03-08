import React, {useState} from 'react'
import Slider from '../../common/Slider';
import Wines from './Wines'
import './home.scss'
import {useSelector} from "react-redux";
import {getAllWines, getWineById} from "../Wine/winesReducer";

const Home = () => {
  const [topListSelection, setTopListSelection] = useState('$')

  const wine = useSelector(state => getAllWines(state));
  console.log("wine", wine)

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
    setTopListSelection(type);
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
          <Wines></Wines>
          {/*<Slider />*/}
        </div>
      </div>
    </div>
  )
}

export default Home