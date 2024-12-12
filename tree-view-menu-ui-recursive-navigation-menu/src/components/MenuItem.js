import React, { useState } from 'react';
import MenuList from './MenuList';

import { IoMdArrowDropright, IoMdArrowDropdown } from 'react-icons/io';

const MenuItem = ({ item }) => {
  const [isActive, setIsActive] = useState(false);

  const handletoggle = () => {
    setIsActive(!isActive);
  };
  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={handletoggle}>
            {isActive ? (
              <IoMdArrowDropdown color="#fff" size={25} />
            ) : (
              <IoMdArrowDropright color="#fff" size={25} />
            )}
          </span>
        ) : null}
      </div>
      {isActive && item.children && item.children.length && (
        <MenuList list={item.children} />
      )}
    </li>
  );
};

export default MenuItem;

// ***{The following approach, for handling more complex data structure} ***

// import React, { useState } from 'react';
// import MenuList from './MenuList';
// import { IoMdArrowDropright, IoMdArrowDropdown } from 'react-icons/io';

// const MenuItem = ({ item }) => {
//   const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

//   function handleToggleChildren(getCurrentlabel) {
//     setDisplayCurrentChildren({
//       ...displayCurrentChildren,
//       [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
//     });
//   }

//   console.log(displayCurrentChildren);

//   return (
//     <li>
//       <div className="menu-item">
//         <p>{item.label}</p>
//         {item && item.children && item.children.length ? (
//           <span onClick={() => handleToggleChildren(item.label)}>
//             {displayCurrentChildren[item.label] ? (
//               <IoMdArrowDropdown color="#fff" size={25} />
//             ) : (
//               <IoMdArrowDropright color="#fff" size={25} />
//             )}
//           </span>
//         ) : null}
//       </div>

//       {item &&
//       item.children &&
//       item.children.length > 0 &&
//       displayCurrentChildren[item.label] ? (
//         <MenuList list={item.children} />
//       ) : null}
//     </li>
//   );
// };

// export default MenuItem;
