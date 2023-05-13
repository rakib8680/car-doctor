import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const CheckOut = () => {

    const data = useLoaderData()
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleBookService = event => {
        event.preventDefault();
        const form = event.target

        const email = user.email;
        const name = form.name.value
        const date = form.date.value

        const order = {
            customerName: name,
            img: data?.img,
            email,
            date,
            price: data?.price,
            service_id: data?._id,
            title: data?.title
        }

        // post 
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order),
        })
            .then((response) => response.json())
            .then(data => {
                if (data.insertedId) {
                    alert('service booked')
                    navigate('/bookings/')

                }
            })

    }

    return (

        <div className='flex flex-col items-center'>
            <div>
                <h2 className='text-3xl font-semibold mt-10'>Book Service : <span className='text-primary'>{data?.title}</span></h2>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-md border border-base-300 bg-base-100 px-10 py-7 my-20">

                <form className='' onSubmit={handleBookService}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name='name' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Amount</span>
                        </label>
                        <input type="text" defaultValue={'$' + data?.price} name='phone' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} name='email' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name='date' className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" value="Confirm Order" className='btn btn-primary btn-block' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;