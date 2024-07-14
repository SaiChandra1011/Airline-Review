import React from 'react'

const AddAirline = () => {
  return (
    <div className="mb-4">
        <form action="">
            <div className="form-row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Airline Name"/>
                </div>
                <div className="col">
                    <input  type="text" className="form-control" placeholder="Home Country"/>
                </div>
                <button className="btn btn-primary">Add</button>


            </div>

        </form>

    </div>
  )
}

export default AddAirline