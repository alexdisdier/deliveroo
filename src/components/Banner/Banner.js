import React from 'react';
import PropType from 'prop-types';

import LinesEllipsis from 'react-lines-ellipsis';

import './Banner.css';

function Banner(props) {

  const {
    restaurant: { name, description, img }
  } = props;

  // eslint-disable-next-line no-unused-vars
  const { webp = '', jpg = ''} = img || {};  

  const bannerImgStyle = {
    backgroundImage: `url("${webp}")`,
    // Webp Fallback to jpg
    // eslint-disable-next-line no-dupe-keys
    // backgroundImage: `image-set(url("${webp}") 1x,
    // url("${jpg}")
    // 1x)`
  }

  // debugger;

  return (
    <div className="banner-container">
      <div className="container banner">
        <div className="banner-content">
          <h3>{name}</h3>
          <LinesEllipsis
            className="banner-description"
            text={description}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </div>
        <div
          className="banner-img"
          style={bannerImgStyle}
        />
      </div>
    </div>
  );
}

Banner.propTypes = {
  name: PropType.string,
  description: PropType.string,
  img: PropType.shape({
    webp: PropType.string,
    jpg: PropType.string,
  })
};

export default React.memo(Banner);
