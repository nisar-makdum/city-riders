import Navbar from '../Navbar/Navbar';
import './Destination.css';
import fakedata from '../fakeData.json';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Map from '../Map/Map';


const Destination = () => {
    const {transportType} = useParams();
    const rideType = fakedata.find(pd => pd.transportType === transportType);


    const [bookVehicle, setBookVehicle] = useState(false)
    let display;
    let buttonText;
    if (bookVehicle) {
        display =
            <div>

                <div >
                    <img className="img-fluid" src={rideType && rideType.image} alt="" />
                    <h2>Ride Type: {rideType && rideType.transportType}</h2>
                    <br/>
                    <h4>Passenger Number: {rideType && rideType.passengerNumber}</h4>
                    <h4>Total Cost: ${rideType && rideType.price}</h4>
                </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
            </div>
        buttonText = <p>Back</p>
    }
    else {
        display =

            <div>
                <div className="input-group">
                    <label for="">Pick From</label>
                    <input className="inp-style" type="text" name="" placeholder="Mirpur" />
                </div>
                <div className="input-group">
                    <label for="">Pick To</label>
                    <input className="inp-style" type="text" name="" placeholder="Dhanmondi" />
                </div>

            </div>

        buttonText = <p>Confirm Your Ticket</p>
    }
   
   return (

        <div>
            <Navbar></Navbar>
            <div className="container">
            <div className="container mt-5 row">
                <div id="booking-area" className="booking-form col-md-8">
                    <h3>Booking Rides</h3>
                    {display}
                    <button style={{ width: '180px', height: '37px' }} className="btn btn-secondary" onClick={() => setBookVehicle(!bookVehicle)}>{buttonText}</button>
                </div>
                <div style={{height: '400px'}} className="col-md-4">
                    <Map></Map>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Destination;