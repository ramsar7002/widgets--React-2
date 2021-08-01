import React, { useEffect, useState } from 'react';
//import Accordion from './Accordion';
import DropDown from './DropDown';
const App = () => {
  const [selected, setSelected] = useState(null);
  const [showDropdown, setShowDropdown] = useState(true);

  const items = [
    {
      title: 'What is React?',
      content: 'React is a front end JavaScript framework',
    },

    {
      title: 'Why use React?',
      content: 'React is a favorite JS libary among engineers',
    },

    {
      title: 'How do you use React?',
      content: 'You use React by creating components',
    },
  ];

  const options = [
    {
      label: 'The color is red',
      value: 'red',
    },

    {
      label: 'The color is blue',
      value: 'blue',
    },

    {
      label: 'The color is green',
      value: 'green',
    },
  ];

  return (
    <div>
      <br />
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <DropDown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      ) : null}
    </div>
  );
};

export default App;
