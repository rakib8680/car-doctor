import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Bookings = () => {

    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then(data => console.log(data))
    }, [])

    return (
        <div>
            your bookings
        </div>
    );
};

export default Bookings;