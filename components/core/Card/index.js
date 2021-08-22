import React from 'react';
import PropTypes from 'prop-types';

// style
import card from './card.module.scss';

const Card = ({onClick}) => {
  
  return(
    <div className={`card`}>
      <div onClick={onClick} className={card.item}>
        <h1>Hola</h1>
      </div>
    </div>
  )
}

Card.propTypes = {
  onClick: PropTypes.func,
}

export default Card