import React, { useState, useEffect } from "react";
import HostSessionForm from "./host_session_form";

const HostSession = (props, { userLogin, userSignup }) => {
  const [sessionType, setSessionType] = useState("");
  useEffect(() => {
    return () => {};
  }, []);

  console.log(sessionType);
  console.log(userLogin);
  console.log(userSignup);
  console.log(props);
  const display =
    sessionType === "" ? (
      <div>
        <div onClick={() => setSessionType("login")}>Login</div>
        <div onClick={() => setSessionType("signup")}>Sign Up</div>
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

  return <div>{display}</div>;
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
