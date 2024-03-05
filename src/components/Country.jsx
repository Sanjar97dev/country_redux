// Country.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountry } from '../redux/slices/asyncActions';
import Skeleton from 'react-loading-skeleton';

const Country = () => {
    const [searchCountry, setSearchCountry] = useState('');
    const { countryData, status } = useSelector((state) => state.country);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountry());
    }, [dispatch]);

    const handleSearch = () => {
        if (searchCountry.trim() !== '') {
            dispatch(getCountry(searchCountry));
            console.log("Selected Country:", searchCountry);
        }
    };

    const handleInput = (e) => {
        setSearchCountry(e.target.value);
    };

    if (countryData === 'loading') {
        <>
                <div className="col-md-3">
                    <Skeleton height={350}/>
                </div>
            </>
    }

    if (countryData.length === 0) {
        return <div className='d-flex justify-content-center flex-grow fw-bold fs-4' style={{background: 'darkblue', color: 'red'}}>
            No country
        </div>
    }

    return (
        <div>
            <div className="card text-center" style={{ border: '2px solid silver', background: 'darkblue', color: 'silver' }}>
                <div className="card-header d-flex justify-content-center m-3" >
                    <input
                        type="text"
                        placeholder='Search'
                        className='form-control w-25'
                        value={searchCountry}
                        onChange={handleInput}
                    />
                    <button className="btn btn-primary ms-2" onClick={handleSearch}>
                        Search
                    </button>
                </div>
                <div className='d-flex flex-wrap align-items-center justify-content-between'>
                    {countryData.map((el) => (
                        <div key={el.id} className="card-body" style={{ border: '1px solid silver', background: 'darkblue', color: 'silver', width: '400px', height: '500px' }}>
                            <img width={350} height={200} src={el.media.flag} alt={el.name} />
                            <h1 className=' mt-4 fw-bold'>{el.abbreviation}</h1>
                            <h1 className="card-text fw-bold">{el.name.substring(0, 15)}...</h1>
                            <h3>{el.capital}</h3>
                            <p>{el.currency}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Country;

