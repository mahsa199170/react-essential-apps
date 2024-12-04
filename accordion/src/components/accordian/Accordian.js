import React, { useState } from 'react';
import { data } from '../../data';
import './Accordian.css';

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [selectMulti, setSelectMulti] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (id) => {
    // Functional update for single selection
    setSelected((prevSelected) => (prevSelected === id ? null : id));
  };

  const handleMultiSelection = (id) => {
    // Functional update for multiple selection
    setMultiple(
      (prevMultiple) =>
        prevMultiple.includes(id)
          ? prevMultiple.filter((item) => item !== id) // Remove the item if already selected
          : [...prevMultiple, id] // Add the item if not selected
    );
  };
  console.log(selected);

  return (
    <div className="acc-wrapper">
      <button onClick={() => setSelectMulti(!selectMulti)}>
        {selectMulti ? 'Switch to Single Selection' : 'Select multi selection'}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => {
            const { id, question, answer } = item;
            return (
              <div className="item" key={id}>
                <div
                  onClick={
                    selectMulti
                      ? () => handleMultiSelection(id)
                      : () => handleSingleSelection(id)
                  }
                  className="title"
                >
                  <h3>{question}</h3>
                  <span>+</span>
                </div>
                {selectMulti
                  ? multiple.includes(id) && (
                      <div className="acc-content">{answer}</div>
                    )
                  : selected === id && (
                      <div className="acc-content">{answer}</div>
                    )}
              </div>
            );
          })
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
