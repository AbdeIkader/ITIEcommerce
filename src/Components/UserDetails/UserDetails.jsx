import React, { useState } from 'react';

const UserDetails = () => {
  // Retrieve user data from local storage
  const userData = JSON.parse(localStorage.getItem('registrationData'));

  return (
    <div className="m-auto w-75 py-5">
      <h2>User Information</h2>
      {userData ? (
        <div>
          <div className="input-data my-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              value={userData.email}
              disabled
            />
          </div>
          <div className="input-data my-2">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              className="form-control"
              value={userData.first_name}
              disabled
            />
          </div>
          <div className="input-data my-2">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              className="form-control"
              value={userData.last_name}
              disabled
            />
          </div>
          <div className="input-data my-2">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              className="form-control"
              value={userData.age}
              disabled
            />
          </div>
        </div>
      ) : (
        <div>No user data available</div>
      )}
    </div>
  );
};

export default UserDetails;
