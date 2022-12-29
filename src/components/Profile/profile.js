import { useAuth0 } from "@auth0/auth0-react";
import "../../styles/profile.scss";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div className="profile-container">
      {isLoading && <div>Loading ...</div>}

      {isAuthenticated && (
        <div>
          <img src={user?.picture} alt={user?.name} />
          <h2 className="username">{user?.name}</h2>
          <p className="email">{user?.email}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
