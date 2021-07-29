import React from 'react';
import Accordion from './Accordion';

const App = () => {
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
  return (
    <div>
      <br />
      <Accordion items={items} />
    </div>
  );
};

export default App;
