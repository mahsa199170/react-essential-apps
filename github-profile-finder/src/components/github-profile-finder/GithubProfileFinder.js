import React, { useEffect, useState } from 'react';
import './GithubProfileFinder.css';
import User from '../user/User';

const GithubProfileFinder = () => {
  const [users, setUsers] = useState(null);
  const [inputUser, setInputUser] = useState('mojombo');
  const [loading, setLoading] = useState(true);

  const url = `https://api.github.com/users/${inputUser}`;

  const fetchGithubUser = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('User not found');
      }
      const data = await response.json();

      if (data) {
        setUsers(data);
        setLoading(false);
        setInputUser('');
      }
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchGithubUser();
  }, []);

  if (loading) {
    return <h1>Loadig Data. please wait!</h1>;
  }

  const findUser = () => {
    fetchGithubUser();
  };

  return (
    <div className="github-profile-container">
      <div className="input-wrapper ">
        <input
          type="text"
          placeholder="Search Github Username..."
          value={inputUser}
          name="serach-by-username"
          onChange={(e) => setInputUser(e.target.value)}
        />
        <button onClick={findUser}>search</button>
      </div>
      {users !== null ? <User user={users} /> : null}
    </div>
  );
};

export default GithubProfileFinder;
