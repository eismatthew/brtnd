import React, { useState, useEffect } from "react";
import axios from "axios";

import BartenderProfile from "./bartender_profile";
import HostProfile from "./host_profile";

const ProfilePage = ({ id, logout }) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    let config = {
      headers: {
        Authorization: localStorage.jwtToken,
      },
    };
    localStorage.bartender !== "false"
      ? axios
          .get("/api/bartenders/current", config)
          .then((res) => setCurrentUser(res.data))
      : axios
          .get("/api/users/current", config)
          .then((res) => setCurrentUser(res.data));
  }, []);

  const profileShow =
    localStorage.bartender !== "false" ? (
      <div>
        <BartenderProfile id={id} currentUser={currentUser} />
      </div>
    ) : (
      <div>
        <HostProfile id={id} currentUser={currentUser} />
      </div>
    );

  console.log(currentUser);
  return (
    <div>
      <div onClick={() => logout()}>Logout</div>
      <div>{profileShow}</div>
    </div>
  );
};

export default ProfilePage;