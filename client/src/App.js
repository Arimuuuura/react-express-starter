import React, { useEffect, useState } from "react";

export const App = () => {

  const [ users, setUsers ] = useState([{}]);

  useEffect(() => {
    fetch("api/v1")
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])

  return (
    <div>
      {
        users.users ? (
          users.users.map((user, index) => (
            <ul key={index}>
              <li>{user.name}</li>
              <li>{user.email}</li>
              <li>{user.phone}</li>
            </ul>
          ))
          ) : (
          <p>Loading...</p>
        )
      }

    </div>
  );
}
