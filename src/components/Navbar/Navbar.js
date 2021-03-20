import React, { useContext } from 'react';
import { Link} from 'react-router-dom';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    let display;
    if(loggedInUser){
        display = <li style={{marginLeft:'50px', fontWeight:"bold"}} className="nav-item pt-2">
            {loggedInUser.displayName}
        </li>
    }
    return (
        <div>
            <nav class="d-flex navbar navbar-expand-lg">
                <div class="container-fluid">
                    <h3>City Riders</h3>
                    <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
                        <ul class="navbar-nav justify-content-end">
                            {display}
                            <li style={{marginLeft: '50px', fontWeight: 'bold'}} class="nav-item pt-2">
                            <Link style={{ textDecoration:'none', color:'black'}} to="/home">Home</Link>
                            </li>
                        
                            <li style={{marginLeft: '50px', fontWeight: 'bold'}} class="nav-item pt-2 fw-bold">
                            <Link style={{ textDecoration:'none', color:'black'}} to="/destination" > Destination</Link>
                            
                            </li>
                            
                            <li style={{marginLeft: '50px', fontWeight: 'bold'}} class="nav-item pt-2 fw-bold">
                                Blog
                            </li>
                            
                            <li style={{marginLeft: '50px', fontWeight: 'bold'}} class="nav-item pt-2 fw-bold">
                                Contact
                            </li>

                            <li style={{marginLeft: '40px'}} class="nav-item btn btn-secondary">
                             <Link style={{ textDecoration:'none', color:'white'}} to="/login"><FontAwesomeIcon icon={faSignInAlt}/> Sign in</Link>
                            </li>
                            <li style={{marginLeft: '50px'}} class="nav-item btn btn-secondary">
                            <button class="nav-item btn btn-secondary" onClick={() => setLoggedInUser({})}><FontAwesomeIcon icon={faSignOutAlt}/> Sign out</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;