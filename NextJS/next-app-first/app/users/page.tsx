import React from "react";

interface User {
  id: number;
  name: string;
  email:string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await res.json();
  console.log(users.length);

  return (
    <>
      <h1>
        <b>Users</b>
      </h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <table className='table table-border'>
        <thead>
          <tr>
            <th>No:</th>
            <th>Name:</th>
            <th>Email:</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <>
                <tr key={user.id}>
                  <td>{index+1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default UsersPage;
