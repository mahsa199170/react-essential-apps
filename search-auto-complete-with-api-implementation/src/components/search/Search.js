// import React, { useEffect, useState } from 'react';
// import './Search.css';
// import SelectedUsers from '../selectedUsers/SelectedUsers';

// const Search = () => {
//   const [users, setUsers] = useState([]);
//   const [userInput, setUserInput] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [showDropDown, setShowDropDown] = useState(false);

//   const fetchName = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch('https://dummyjson.com/users');
//       if (!response) {
//         throw new Error('User not Found');
//       }
//       const data = await response.json();
//       if (data && data.users && data.users.length) {
//         setUsers(data.users);
//         setLoading(false);
//         setError(null);
//       }
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//       setError(error.message);
//     }
//   };
//   //   console.log(users);

//   const targetedUser = users.filter((user) =>
//     user.firstName.toLowerCase().startsWith(userInput.toLowerCase())
//   );

//   useEffect(() => {
//     if (userInput.length > 0 && targetedUser.length > 0) {
//       setShowDropDown(true);
//     } else {
//       setShowDropDown(false);
//     }
//   }, [userInput, targetedUser]);

//   useEffect(() => {
//     fetchName();
//   }, []);

//   const handleClick = (e) => {
//     setUserInput(e.target.innerText);
//     setShowDropDown(false);
//   };
//   return (
//     <div className="search-autocomplete-container">
//       {loading ? (
//         <h1>Loading. please wait...</h1>
//       ) : (
//         <>
//           <input
//             name="search-users"
//             type="text"
//             placeholder="Search Users here..."
//             value={userInput}
//             onChange={(e) => setUserInput(e.target.value)}
//           />
//           {error && <div style={{ color: 'red' }}>{error}</div>}
//         </>
//       )}
//       {showDropDown && (
//         <SelectedUsers data={targetedUser} handleClick={handleClick} />
//       )}
//     </div>
//   );
// };

// export default Search;

import React, { useEffect, useState } from 'react';
import './Search.css';
import SelectedUsers from '../selectedUsers/SelectedUsers';

const Search = () => {
  const [users, setUsers] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showDropDown, setShowDropDown] = useState(false);

  const url = 'https://dummyjson.com/users';

  // Fetching users from the API
  const fetchName = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('User not Found');
      }
      const data = await response.json();
      setUsers(data.users);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  // Filter users based on the input
  const targetedUser = users.filter((user) =>
    user.firstName.toLowerCase().startsWith(userInput.toLowerCase())
  );

  // Show the dropdown only when there's text and matching users
  useEffect(() => {
    if (userInput.length > 0 && targetedUser.length > 0) {
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  }, [userInput, targetedUser]);

  // Fetch users once on component mount
  useEffect(() => {
    fetchName();
  }, []);

  // Handle click on a user to populate the input field and hide the dropdown
  const handleClick = (e) => {
    setUserInput(e.target.innerText); // Set input to the selected user's name
    setShowDropDown(false); // Hide dropdown after selecting
  };

  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1>Loading. Please wait...</h1>
      ) : (
        <>
          <input
            name="search-users"
            type="text"
            placeholder="Search Users here..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          {error && <div style={{ color: 'red' }}>{error}</div>}{' '}
          {/* Display error if any */}
        </>
      )}

      {/* Show the dropdown only when showDropDown is true */}
      {showDropDown && (
        <SelectedUsers data={targetedUser} handleClick={handleClick} />
      )}
    </div>
  );
};

export default Search;
