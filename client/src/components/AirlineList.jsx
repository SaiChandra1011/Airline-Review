import React, {useEffect} from 'react';
import AirlineReviewer from '../apis/AirlineReviewer';

const AirlineList = () => {

    useEffect( () => { 
        const fetachData = async () => {
            try{
                const response = await AirlineReviewer.get("/");
                console.log(response);
    
            }
            catch(err){
    
            }
        }
        fetachData();


    },[]); 
  return (
    <div>
        <div className="list-group">
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-priary">
                        <th scope="col">Airline</th>
                        <th scope="col">Home Country</th>
                        <th scope="col">Ratings</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        <td>Indigo</td>
                        <td>India</td>
                        <td>Rating</td>
                        <td><button className="btn btn-warning rounded-pill">Update</button></td>
                        <td><button className="btn btn-danger">Delete</button></td>


                    </tr>

                </tbody>

            </table>

        </div>
    </div>
  )
}

export default AirlineList