import React, { useState } from 'react';
import './Tabs.css';

const Tabs = ({ tabsContent, onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleOnClick = (getCurrentIndex) => {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  };
  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem, index) => {
          const { label } = tabItem;
          return (
            <div
              className={`tab-item ${
                currentTabIndex === index ? 'active' : ''
              }`}
              onClick={() => handleOnClick(index)}
              key={label}
            >
              <span className="label">{label}</span>
            </div>
          );
        })}
      </div>

      <div className="content" style={{ color: 'purple' }}>
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
