import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
const Sidebar = () => {
    return (
        <div className="Sidebar d-flex flex-column justify-content-between  py-5 px-5">
           <div>
           <ul className="list-unstyled side">
                <Link className="list1 side1" to="/wedding"><span className="mt-5">DESTINATION WEDDING</span></Link>
                <Link className="list1  side1" to="/shop"><span className="mt-5">BD SHOP</span></Link>
                <Link className="list1 side1"  to="/journey">ENJOY JOURNEY</Link>
                <Link className="list1 side1"  to="/onion">HOT ONION</Link>
            </ul>
           </div>

        </div>
    );
};

export default Sidebar;