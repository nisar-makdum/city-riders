import Navbar from '../Navbar/Navbar';
import map from '../../images/Map.png';
import './Destination.css';
import fakedata from '../fakeData.json';
import { useParams } from 'react-router';
import { useState } from 'react';


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
                    <img src={rideType && rideType.image} alt="" />
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
                <div className="inputs">
                    <div className="input-group">
                        <label for="">Booking Date</label>
                        <input className="inp-style" type="date" name="" />
                    </div>
                </div>

            </div>

        buttonText = <p>Confirm Your Ticket</p>

    }
   
   return (


    <div>
            <Navbar></Navbar>
            <div className="main-content container mt-5">
                <div id="booking-area" className="booking-form">
                    <h3>Booking Rides</h3>
                    {display}
                    <button style={{ width: '200px', height: '40px' }} className="btn btn-secondary" onClick={() => setBookVehicle(!bookVehicle)}>{buttonText}</button>
                </div>
                <div>
                    <img style={{height:'600px', width:'700px'}} src={map} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Destination;