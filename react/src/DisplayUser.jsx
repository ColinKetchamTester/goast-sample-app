import { useState } from 'react';

function DisplayUser() {
  const [username, setUsername] = useState({first: 'John', last: 'Smith'});

  return (
    <>
      {username ? (
        <>
          <div>Firstname: {username.first}</div>
          <div>Lastname: {username.last}</div>
        </>
      ) : (
        <div>User's name has been cleared or is not set.</div>
      )}
      <button onClick={() => setUsername(null)}>Clear Name</button>
    </>
  );
}

export default DisplayUser;
