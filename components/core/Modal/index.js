import React,{ useState } from 'react';
import PropTypes from 'prop-types';

//style
import modal from './modal.module.scss';

const Modal = ({ className, onClick }) => {
  return(
    <section  onClick={onClick} className={modal[`${className}`]}>
      <div className={modal.modal_content}>
        <h1>
          HELLOO
        </h1>
      </div>
      <h1 className={modal.close} onClick={onClick}>x</h1>
    </section>
  )
}

Modal.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
}

export default Modal