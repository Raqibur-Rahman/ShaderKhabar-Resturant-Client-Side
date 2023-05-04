import React from 'react';
import { useParams } from 'react-router-dom';

const ChefDetail = () => {
    const {id} = useParams();
    return (
        <div>
            <h3>This is details: {id}</h3>
        </div>
    );
};

export default ChefDetail;