import React from 'react';

const SelectedUsers = ({ data, handleClick }) => {
  return (
    <ul>
      {data && data.length > 0
        ? data.map((user, index) => {
            const { firstName } = user;
            return (
              <li onClick={handleClick} key={index}>
                {firstName}{' '}
              </li>
            );
          })
        : null}
    </ul>
  );
};

export default SelectedUsers;
