import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://car-doctor-server-sand-eight.vercel.app/services')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])



    return (
        <div className="my-24">
            <div className="text-center space-y-3 mb-12 p-6 md:p-0">
                <h1 className="text-primary font-semibold text-lg">Service</h1>
                <h2 className="text-4xl font-bold ">Our Service Area</h2>
                <p className="">the majority have suffered alteration in some form, by injected humour, or randomized <br /> words which dont look even slightly believable. </p>
            </div>
            <div className="md:grid grid-cols-3 p-4 md:p-0">
                {
                    services.map(service => <ServiceCard service={service} key={service._id} ></ServiceCard>)
                }
            </div>
            <div className="text-center mt-5">
                <button className="btn btn-primary btn-outline ">More Services</button>
            </div>
        </div>
    );
};

export default Services;