import React from 'react';
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import useQuery from '../../utils/useQuery';
import { fetchWines } from './winesReducer';

export default function ExploreWine({wines}) {
    const dispatch = useDispatch();
    const query = useQuery();
    const wine_types = query.get("wine_types");    
    const filter = {"wine_types": [wine_types]}
  
    useEffect(() => {
      dispatch(fetchWines(filter));
    }, [dispatch, filter])
  
    return (
      <>
        <h1>Explore Page</h1>
        <p>Show Wines</p>
        <ul>

        </ul>
      </>
    )
}