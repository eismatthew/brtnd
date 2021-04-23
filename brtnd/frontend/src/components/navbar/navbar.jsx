import React from 'react';
import Navbar from './navbar';
import { Link } from 'react-router-dom';

const Navbar = ({
 
}) => {
  return (

  <div className='navbar-container'>

    <head>
        <link rel="stylesheet" href="navbar.css"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet"/>
    </head>

    <body>
        <div class="navbar-main">
            <div class="logo">
              {/* <!-- <Link to="/" className="header-link"> --> */}
                <h3>brtnd</h3>
              {/* <!-- </Link> --> */}
            </div>
            <div class="session-right">
            {/* <!-- {currentUser ? activeUser() : sessionLinks()} --> */}
              <button>Sign in</button>
            </div>
        </div>

    </body>
  </div>
  );
};



export default BartenderSignupForm;



