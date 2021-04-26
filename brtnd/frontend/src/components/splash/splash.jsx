import React from "react";
import { Link } from "react-router-dom";

import "./splash.css";

const Splash = () => {
  return (
    <div className="splash-main">
      <div className="splash-content">
        <div className="splash-title">
          <h1>brtnd</h1>
        </div>
        <div className="splash-copy">
          <h2>Serve and get served</h2>
          <h3>
            If you have an event, you have a bartender <br />
            If you have drinks, you have a gig
          </h3>
        </div>
        <div className="splash-buttons">
          <Link to="/host-session" className="session-button">
            <button>Enter as host</button>
          </Link>
          <Link to="/bartender-session" className="session-button">
            <button>Enter as bartender</button>
          </Link>
        </div>
      </div>
      <div className="footer">
        <section className='discover-bottom'>
          <span className="link"><a href="https://github.com/eismatthew/brtnd" target="_blank">GitHub</a></span><br/>
          <span className="link"><a href="https://www.linkedin.com/in/tim-padgett-9a359286/" target="_blank">Tim Padgett</a></span><br />
          <span className="link"><a href="https://www.linkedin.com/in/kenneth-schlappkohl-04b9b9136/" target="_blank">Kenneth Schlappkohl</a></span><br />
          <span className="link"><a href="https://www.linkedin.com/in/matthew-eis/" target="_blank">Matthew Eis</a></span><br />
          <p>Language: English (US)</p>
        </section>
      </div>
    </div>
  );
};

export default Splash;
