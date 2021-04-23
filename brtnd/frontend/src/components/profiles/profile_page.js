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

  const greetings = [
    "Greetings",
    "Hi",
    "Howdy",
    "Welcome",
    "Bonjour",
    "Buenos Dias",
    "Good Day",
    "G'Day",
    "Hi-ya",
    "Hey",
    "Shalom",
    "Howzit",
    "What's up",
    "Howdy-do",
    "What’s new",
    "It’s good to see you",
    "Yo!",
  ];

  const profileShow =
    localStorage.bartender !== "false" ? (
      <div>
        <BartenderProfile
          id={id}
          currentUser={currentUser}
          greetings={greetings}
        />
      </div>
    ) : (
      <div>
        <HostProfile id={id} currentUser={currentUser} greetings={greetings} />
      </div>
    );
  return (
    <div className="profile-main">
      <h3 className="logo">brtnd</h3>
      <button className="logout-button" onClick={() => logout()}>
        Logout
      </button>
      <div>{profileShow}</div>
    </div>
  );
};

export default ProfilePage;
