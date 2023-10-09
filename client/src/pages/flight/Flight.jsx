import React from 'react';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { SearchContext } from "../../context/SearchContext";
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';

const Flight = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const {data, loading, error} = useFetch(`/flights/find/${id}`)
    const { dates, options } = useContext(SearchContext);

    return (
        <div>
            <Navbar/>
            <Header/>
            {options.ticket} tickets
            <h2>
                  <b>${data.cheapestPrice * options.ticket}</b>
                </h2>
        </div>
    );
};

export default Flight;