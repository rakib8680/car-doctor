import React from 'react';

const BookingTableRow = ({ booking }) => {

    console.log(booking);
    const { price, img, date, title, email } = booking

    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-20 h-20">
                            <img src={img} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                        <div className="text-sm opacity-50">{email}</div>
                        <div className="text-sm opacity-50">Quantity : 1</div>
                    </div>
                </div>
            </td>
            <td>
                ${price}
            </td>
            <td>{date}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default BookingTableRow;