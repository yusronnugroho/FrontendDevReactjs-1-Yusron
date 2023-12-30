import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <header>
        <div className="py-8 container mx-auto">
          <h1 className="mb-8 text-6xl">
            <Link to={'/'}>
              Restaurants
            </Link>
          </h1>
          <p className="md:w-3/5 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper id tellus nec lacinia. Sed hendrerit venenatis erat a maximus. Nulla tempus venenatis eros hendrerit volutpat.</p>
        </div>
        <Navbar />
      </header>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
};

export default App;
