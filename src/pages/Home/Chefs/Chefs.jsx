import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard';



const Chefs = () => {
    const [chefData, setChefData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefData(data))
            .catch(error => console.log(error))

    }, [])
    return (
        <div>
            <h3>All Chefs</h3>
            {
                chefData.map(chef =>
                    <ChefCard chef={chef}></ChefCard>
                )
                // chefData.map(chef=><p
                // key={chef.chef_id}>
                //     {chef.chef_name}
                // </p>)
                // chefData.map(chef=><ChefCard></ChefCard>)  
            }

        </div>
    );
};

export default Chefs;