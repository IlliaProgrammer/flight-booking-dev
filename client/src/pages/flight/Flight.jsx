import React from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const Flight = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const {data, loading, error} = useFetch(`/flights/find/${id}`)

    return (
        <div>
            
        </div>
    );
};

export default Flight;