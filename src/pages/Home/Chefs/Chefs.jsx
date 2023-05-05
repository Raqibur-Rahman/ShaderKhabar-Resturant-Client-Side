import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard';
import './Chefs.css';

const Chefs = () => {
  const [chefData, setChefData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/chefs')
      .then((res) => res.json())
      .then((data) => {
        setChefData(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      {loading && (
        <div className="spinner-container">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <div className="chef-container">
        <h3 className="text-center">All Chefs</h3>
        <div className="chef-cards ">
          {chefData.map((chef) => (
            <ChefCard key={chef.chef_id} chef={chef} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chefs;
