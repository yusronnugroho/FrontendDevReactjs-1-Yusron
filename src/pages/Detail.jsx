import React, { useEffect, useState } from 'react';
import Rate from '../components/Rate';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [dataFoods, setDataFoods] = useState(null);
  const [dataDrinks, setDataDrinks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://restaurant-api.dicoding.dev/detail/${id}`);
        setData(response.data.restaurant);
        setDataFoods(response.data.restaurant.menus.foods);
        setDataDrinks(response.data.restaurant.menus.drinks);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message || 'error di fetching data');
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className='mx-auto container border-t-2 mb-40 pt-12' key={data.id}>
      <div className='bg-slate-500'>
        <img className='w-full' src={`https://restaurant-api.dicoding.dev/images/medium/${data.pictureId}`} alt="" />
      </div>
      <h1 className='text-5xl my-4 font-semibold'>{data.name}</h1>
      <div className='text-3xl'>
        <Rate value={data.rating} />
      </div>
      <p className='pt-5 text-xl'><b>Address : </b>{data.address}</p>
      <p className='text-xl py-5'>{data.description}</p>
      <div className='mx-auto text-center mt-16 '>
        <h1 className='text-4xl font-semibold'>Menu</h1>
        <div className='flex flex-wrap mt-7 text-2xl h-fit font-sans'>
          <div className='w-2/4 p-5'>
            <div className='border-2 rounded-lg border-blue-900 p-5 h-full'>
              <h1 className='mb-5 font-semibold'>Foods</h1>
              {dataFoods.map(item => (
                <div>
                  <li key={item.id}>{item.name}</li>
                </div>
              ))}
            </div>
          </div>
          <div className='w-2/4 p-5'>
            <div className='border-2 rounded-lg border-blue-900 p-5 h-full'>
              <h1 className='mb-5 font-semibold'>Drinks</h1>
              {dataDrinks.map(item => (
                <div>
                  <li key={item.id}>{item.name}</li>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail