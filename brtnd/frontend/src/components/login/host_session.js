import React, { useState, useEffect } from "react";
import HostSessionForm from "./host_session_form";
import './host_session.css';

const HostSession = ({ userLogin, userSignup }) => {
  const [sessionType, setSessionType] = useState("");
  useEffect(() => {
    return () => {};
  }, []);

  console.log(sessionType);
  console.log(userLogin);
  console.log(userSignup);
  const display =
    sessionType === "" ? (
      <div className="enter-buttons">
        <button onClick={() => setSessionType("login")}>Login</button>
        <button onClick={() => setSessionType("signup")}>Sign Up</button>
      </div>
    ) : (
      <div>
        <HostSessionForm
          sessionType={sessionType}
          userLogin={userLogin}
          userSignup={userSignup}
        />
      </div>
    );

  return <div className="choose-session-main">{display}</div>;
};

export default HostSession;

// renderErrors(){
//   return(
//     <ul className='error-container'>
//       {this.props.errors.map((error, i) => (
//         <li key={`error-${i}`}>
//           {error}
//         </li>
//       ))}
//     </ul>
//   );
// }
