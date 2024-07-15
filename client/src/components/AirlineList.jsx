import React, { useEffect } from 'react';
import AirlineReviewer from '../apis/AirlineReviewer';
import { useContext } from 'react';
import { AirlinesContext } from '../context/AirlinesContext';

const AirlineList = (props) => {
    const { airlines, setAirlines } = useContext(AirlinesContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await AirlineReviewer.get("/");
                setAirlines(response.data.data.airlines);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [setAirlines]);

    return (
        <div>
            <div className="list-group">
                <table className="table table-hover table-dark">
                    <thead>
                        <tr className="bg-primary">
                            <th scope="col">Airline</th>
                            <th scope="col">Home Country</th>
                            <th scope="col">Ratings</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {airlines && airlines.map(airline => {
                            return (
                                <tr key={airline.id}>
                                    <td>{airline.airline_name}</td>
                                    <td>{airline.country_of_origin}</td>
                                    <td>reviews</td>
                                    <td>
                                        <button className="btn btn-warning rounded-pill">Update</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AirlineList;