import React from 'react';
import './streams/Header.css';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';


const Header = () => {
    return (
      
        <div>
            <div className="navbar">
              <Link to="/" className="item">
              <button className="ui gray button">Streamer</button> 
              </Link>
              <Link to="/" className="item">
              <button className="ui gray button">Streams</button>
              </Link>
              <a>
                <GoogleAuth />
              </a>
            </div>
        </div>
    
    );
};

export default Header;