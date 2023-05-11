import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {

    const data = useLoaderData()
    console.log(data);

    return (
        <div>
            Book
        </div>
    );
};

export default CheckOut;