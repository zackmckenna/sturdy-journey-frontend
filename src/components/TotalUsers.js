import React from 'react';

const TotalUsers = ({ users }) => {
  return (
    <>
      <h1>Total Users in Database</h1>
      {users.map(user => <h4 key={user.id}>{user.name}</h4>)}
    </>
  )
}

 export default TotalUsers;
