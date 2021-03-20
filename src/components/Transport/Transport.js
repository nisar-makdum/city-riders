import React from 'react';
import { useHistory } from 'react-router-dom';

const Transport = (props) => {
    const {transportType, image} = props.transport;
    const cardStyle = {
        margin: '20px',
        borderRadius: '10px',
        height: '230px',
        width:'220px',
        float: 'left'
    } 

    const history = useHistory()
    const handleBook = (transportType) => {
        history.push(`/book/${transportType}`);
    }

    return (
        <div style={cardStyle} class="card d-flex align-items-center">
            
            <div>
                <img src={image} style={{height:'80px', width:'100px'}} class="card-img-top m-3 img-fluid" alt=""/>
            </div>
            <div class="card-body">
                <h5 class="card-title"> {transportType}</h5>
                <button onClick={() => handleBook(transportType)}  class="btn btn-secondary">Book Now</button>
            </div>
        </div>
    );
};

export default Transport;