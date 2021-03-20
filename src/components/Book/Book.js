import React from 'react';
import { useParams } from 'react-router-dom';
import Destination from '../Destination/Destination';
const Book = () => {
    const {transportType} = useParams();
    return (
        <div style={{textAlign: 'center'}}>
            {/* <h1>Let's book a {transportType} Ticket.</h1> */}
            <Destination></Destination>
            </div>
    );
};

export default Book;