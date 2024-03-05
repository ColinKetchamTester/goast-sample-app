import { useState } from 'react';

function DisplayUser() {
  const [username, setUsername] = useState({first: 'John', last: 'Smith'});

  return (
    <>
      {username === null ? (
        <div>Username is null</div>
      ) : (
        <>
          <div>Firstname: {username.first}</div>
          <div>Lastname: {username.last}</div>
        </>
      )}
      <button onClick={() => setUsername({first: '', last: ''})}>Clear Name</button>
    </>
  );
}

export default DisplayUser;
