import React from 'react';
import { useLocation } from 'react-router-dom';
//import axios from 'axios';

const Navbar = () => {
  const location = useLocation();
  const lineStripColor = 'border-blue-900';
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className={`border-t-2 ${lineStripColor} border-b-2 w-full py-5`}>
        <div className="container mx-auto flex flex-wrap flex-col md:flex-row text-gray-500 items-center">
            <nav className="md:mr-auto md:border-gray-400 flex justify-center flex-wrap items-center text-base">
            <p className="text-lg">Filter By: </p>
            <div className="flex flex-wrap pl-4">
                {[
                    { label: 'Open Now', type: 'radio', value: '' },
                    { label: 'Price', type: 'select', options: ['Price', 'Price'], width: 'w-24' },
                    { label: 'Categories', type: 'select', options: ['Categories', 'Categories', 'Categories'], width: 'w-48' },
                ].map((filter, index) => (
                <div key={index} className={`items-center ${lineStripColor} mr-7 border-b-2`}>
                    {filter.type === 'radio' && (
                    <>
                        <input
                            id={`link-radio-${index}`}
                            type="radio"
                            value={filter.value}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:ring-offset-gray-800 dark:focus:ring-blue-600 focus:ring-2 dark:border-gray-600 dark:bg-gray-700"
                        />
                        <label htmlFor={`link-radio-${index}`} className="ml-2 text-md font-bold text-blue-950">
                            {filter.label}
                        </label>
                    </>
                    )}
                    {filter.type === 'select' && (
                    <select placeholder="test" className={`text-blue-950 text-md font-bold ${filter.width}`}>
                        {filter.options.map((option, optionIndex) => (
                        <option key={optionIndex} value={option.toLowerCase()}>
                            {option}
                        </option>
                        ))}
                    </select>
                    )}
                </div>
            ))}
          </div>
        </nav>
        <button
          onClick={handleRefresh}
          className="font-semibold text-sm inline-flex text-gray-400 items-center border-2 py-2 px-8 focus:outline-none hover:bg-gray-500 hover:text-white rounded"
        >
          CLEAR ALL
        </button>
      </div>
    </div>
  );
};

export default Navbar;
