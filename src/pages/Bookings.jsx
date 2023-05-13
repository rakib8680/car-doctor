import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import BookingTableRow from './BookingTableRow';

const Bookings = () => {

    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const url = `https://car-doctor-server-sand-eight.vercel.app/bookings?email=${user?.email}`

    useEffect(() => {
        fetch(url,{
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then((response) => response.json())
            .then(data => {
                if(!data.error){
                    setBookings(data)
                }
                else{
                    navigate('/')
                }
            })
    }, [url,navigate]);

    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete this booking?')
        if (proceed) {
            fetch(`https://car-doctor-server-sand-eight.vercel.app/bookings/${id}`, {
                method: 'DELETE',
                headers: { 'Content-type': 'application/json' },
            })
                .then(response => response.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted booking')
                        const remaining = bookings.filter(bok => bok._id !== id)
                        setBookings(remaining)

                    }
                })
        }

    }

    return (
        <div>
            <h1 className='text-center pb-16 pt-10 text-2xl font-semibold'>Your Bookings : {bookings.length}</h1>
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
                            bookings.map((booking) => <BookingTableRow booking={booking} key={booking._id} handleDelete={handleDelete} ></BookingTableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;