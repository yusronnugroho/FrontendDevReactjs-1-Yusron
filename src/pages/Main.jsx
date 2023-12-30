import React, { useEffect, useState } from 'react';
import Rate from '../components/Rate';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get('https://restaurant-api.dicoding.dev/list');
            setData(response.data.restaurants);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError(error.message || 'error di fetching data');
            setLoading(false);
        }
        };
        fetchData();
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className="text-4xl mt-20">All Restaurants</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <section className="flex flex-wrap">
                {data.map((item) => (
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mt-12" key={item.id}>
                    <div className="px-5">
                    <div className="bg-gray-200 w-full">
                        <img className="h-52 w-full" 
                            src={`https://restaurant-api.dicoding.dev/images/medium/${item.pictureId}`} alt="" 
                        />
                    </div>
                    <h1 className="text-2xl pt-3 font-semibold">{item.name}</h1>
                    <Rate value={item.rating} />
                    <div className="text-xs mb-12 mt-3 text-gray-500 flex flex-wrap">
                        <p>{item.city} . </p>
                        <p>$$$$</p>
                        <div className="ml-auto flex flex-wrap">
                        <div className="rounded-full w-3 h-3 my-auto mr-1 bg-red-500"></div>
                        <p>CLOSED</p>
                        </div>
                    </div>
                    <Link to={`/detail/${item.id}`}>
                        <button className="w-full bg-blue-950 text-xm p-4 text-white">LEARN MORE</button>
                    </Link>
                    </div>
                </div>
                ))}
            </section>
            <div className="justify-center text-center my-28">
                <button className="border rounded-sm border-blue-950 px-44 py-2 text-blue-900 hover:bg-blue-950 hover:text-white">LOAD MORE</button>
            </div>
        </div>
    );
};

export default Main;
