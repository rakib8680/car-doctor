
const ServiceCard = ({service}) => {

    const {title, img, price} = service;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-md border border-base-300 mb-10 mx-auto">
            <figure><img src={img} /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl" >{title}</h2>
                <p className="text-lg font-semibold text-success">Price : ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;