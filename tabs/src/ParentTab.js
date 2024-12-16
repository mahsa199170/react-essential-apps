import React from 'react';
import Tabs from './components/tabs/Tabs';

function RandomComponent() {
  return <h1>This is a content for Tab 3</h1>;
}

const parentTab = () => {
  const tabs = [
    {
      label: 'Tab 1',
      content: <div>This is content for Tab1</div>,
    },
    {
      label: 'Tab 2',
      content: <div>This is content for Tab2</div>,
    },
    {
      label: 'Tab 3',
      content: <RandomComponent />,
    },
  ];

  const handleChange = (currentTabIndex) => {
    console.log(currentTabIndex);
  };
  return (
    <div>
      <Tabs tabsContent={tabs} onChange={handleChange} />
    </div>
  );
};

export default parentTab;
