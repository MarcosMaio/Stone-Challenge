import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDollarExchangeRate } from '../contexts/DollarExchangeRate';
import fetchDollarCotation from 'services/fetchDollarCotation'

export default function API( ) {
    const { dollarExchangeRate , setDollarExchangeRate } = useDollarExchangeRate();
    const { data: DollarExchangeRate, isLoading, isError } = useQuery('dollarCotation', fetchDollarCotation);
    
    useEffect(() => {
        if(!isLoading && !isError) {
            setDollarExchangeRate(DollarExchangeRate);
        }
    }, [DollarExchangeRate,isLoading,isError,setDollarExchangeRate])

    return (
        <></>
    )
}
