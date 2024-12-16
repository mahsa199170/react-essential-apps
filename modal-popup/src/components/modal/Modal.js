import React from 'react';

import './Modal.css';
const Modal = ({ id, header, body, footer, closePopup }) => {
  return (
    <div id={id || 'Modal'} className="modal">
      <div className="modal-content">
        <div className="header">
          <span className="close-modal-icon" onClick={closePopup}>
            &times;
          </span>
          <h2>{header ? header : 'Header'}</h2>
        </div>
        <div className="body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is our modal body</p>
            </div>
          )}
        </div>
        <div className="footer">
          {footer ? footer : <h2>This is our footer</h2>}
        </div>
      </div>
    </div>
  );
};

export default Modal;
