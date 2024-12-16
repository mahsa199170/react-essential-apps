import React, { useState } from 'react';
import Modal from './modal/Modal';

const ParentModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleTogglePopup = () => {
    setShowModal(!showModal);
    console.log(showModal);
  };
  const handleIcon = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleTogglePopup} className="styled-button">
        Open Modal Popup
      </button>
      {showModal && (
        <Modal
          id={'cutom-id'}
          body={<div style={{ marginTop: '80px' }}>Cutomized Body</div>}
          closePopup={handleIcon}
          header={<h2>Customized Header</h2>}
          Footer={<h2>Customized Footer</h2>}
        />
      )}
    </div>
  );
};

export default ParentModal;
