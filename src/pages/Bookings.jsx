import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import BookingTableRow from './BookingTableRow';

const Bookings = () => {

    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then(data => setBookings(data))
    }, [])

    return (
        <div>
            your bookings : {bookings.length}
            <div className="overflow-x-auto w-full">
                <table className="table w-full ">
                    {/* head */}
                    <thead >
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking) => <BookingTableRow booking={booking} key={booking._id} ></BookingTableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;