import React from 'react';
import PropType from 'prop-types';

import LinesEllipsis from 'react-lines-ellipsis';

import './Card.css';

function Card(props) {
  const {
    title,
    description,
    price,
    img,
    popular,
    id,
    quantity,
    addMeal
  } = props;

  // eslint-disable-next-line no-unused-vars
  const { webp = '', jpg = ''} = img || {};  

  const cardImgStyle = {
    backgroundImage: `url("${webp}")`,
    // Webp Fallback to jpg
    // eslint-disable-next-line no-dupe-keys
    // backgroundImage: `image-set(url("${webp}") 1x,
    // url("${jpg}")
    // 1x)`
  }

  let star = (
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 10.08l-3.24 1.8c-.36.2-.6.03-.54-.38l.62-3.84-2.62-2.6c-.3-.3-.2-.54.22-.54h3.82L5.76.34c.13-.38.37-.38.5 0L7.9 4.52h3.66c.42 0 .52.23.22.53l-2.62 2.6.62 3.85c.07.4-.17.58-.54.37L6 10.07z"
        fill="#FF8100"
        fillRule="evenodd"
      />
    </svg>
  );
  let quantityDiv;
  let popularDiv;
  let active;

  if (popular)
    popularDiv = <span className="card-popular">{star} populaire</span>;

  if (quantity > 0) {
    active = 'card-active';
    quantityDiv = <div className="card-quantity">{quantity}x</div>;
  } else {
    active = 'card-inactive';
  }

  return (
    <div
      data-testid="card-meal"
      className={`card ${active}`}
      onClick={() => {
        addMeal({
          id: id,
          name: title,
          price: price,
          quantity: 1
        });
      }}
    >
      <div className="card-content">
        <div>
          {quantityDiv}
          <h6 className="card-title">{title}</h6>
        </div>
        <LinesEllipsis
          className="card-description"
          text={description}
          maxLine="2"
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
        <div>
          <span className="card-price">{price}&nbsp;€</span>
          <span>{popularDiv}</span>
        </div>
      </div>
      <div
        className="card-img"
        style={cardImgStyle}
      />
    </div>
  );
}

Card.propTypes = {
  title: PropType.string,
  description: PropType.string,
  price: PropType.string,
  id: PropType.string,
  addMeal: PropType.func.isRequired,
  img: PropType.shape({
    webp: PropType.string,
    jpg: PropType.string,
  }),
  popular: PropType.bool,
  quantity: PropType.number
};

export default React.memo(Card);
