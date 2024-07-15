import React, { useContext, useState } from 'react';
import AirlineReviewer from '../apis/AirlineReviewer'; 

import { AirlinesContext } from '../context/AirlinesContext';


const AddAirline = () => {
    const { addAirlines } = useContext(AirlinesContext);

    const [airline_name, setAirline_name] = useState("");
    const [country_of_origin, setCountry_of_origin] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await AirlineReviewer.post("/", {
                airline_name,
                country_of_origin,
            });
            addAirlines(response.data.data.airlines);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="mb-4">
            <form action="">
                <div className="form-row">
                    <div className="col">
                        <input value={airline_name} onChange={e => setAirline_name(e.target.value)} type="text" className="form-control" placeholder="Airline Name" />
                    </div>
                    <div className="col">
                        <input value={country_of_origin} onChange={e => setCountry_of_origin(e.target.value)} type="text" className="form-control" placeholder="Home Country" />
                    </div>
                    <button onClick={handleSubmit} type="submit" className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddAirline;