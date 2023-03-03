import React, { useState, useEffect } from 'react'
import { RiCoinFill } from 'react-icons/ri'
import { GiTwoCoins } from 'react-icons/gi';
import { FaCoins } from 'react-icons/fa';
import Slider from '../../common/Slider';
import './home.css'

const Home = () => {
  const [topListSelection, setTopListSelection] = useState('$')
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
          <a className='toplist-button' onClick={() => setTopListSelection('$')}>
            <RiCoinFill style={{ padding: '10px' }} />
          </a>
          <a className='toplist-button' onClick={() => setTopListSelection('$$')}>
            <GiTwoCoins style={{ padding: '10px' }} />
          </a>
          <a className='toplist-button' onClick={() => setTopListSelection('$$$')}>
            <FaCoins style={{ padding: '10px' }} />
          </a>
        </div>
        <div className='controls-text'>
          {topListSelection === '$' && <p>Best wines under $20 right now</p>}
          {topListSelection === '$$' && <p>Best wines between $20 and $40 right now</p>}
          {topListSelection === '$$$' && <p>Best wines between $40 and $80 right now</p>}
        </div>
      </div>

      <Slider />

    </div>
  )
}

export default Home