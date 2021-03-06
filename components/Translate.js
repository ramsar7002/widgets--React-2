import React, { useState } from 'react';
import DropDown from './DropDown';
import Convert from './Convert';

const options = [
  {
    label: 'Afrikaans',
    value: 'af',
  },

  {
    label: 'Arabic',
    value: 'ar',
  },

  {
    label: 'Hindi',
    value: 'hi',
  },

  {
    label: 'Hebrew',
    value: 'he',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input
            value={text}
            onChange={e => {
              setText(e.target.value);
            }}
          />
        </div>
      </div>

      <DropDown
        label={'Select a Language'}
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
