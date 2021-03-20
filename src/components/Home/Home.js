import React, { useEffect, useState } from 'react';
import './Home.css';
import img from '../../images/Bg.png';
import fakeData from '../fakeData.json'
import Navbar from '../Navbar/Navbar';
import Transport from '../Transport/Transport';

const Home = () => {
    const [transports, setTransports] = useState([])
    useEffect(() => {
        setTransports(fakeData)
    }, [])
    return (
        <div>
            <img className="style" src={img} alt=""/>
            <Navbar></Navbar>
            <div style={{marginTop:'150px'}} className="container">
                <div className="row">
                    <div className="col-sm">
                        {
                            transports.map(transport => <Transport transport={transport}></Transport>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;