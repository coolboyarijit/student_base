import React from 'react';

const Avatar = (props) => {
  const { url, height = '100px', width = '100px' } = props;
  return (
    <div style={{ height, width, margin: 'auto' }}>
      <img alt='user' src={url} className='card-img-top rounded-circle' />
    </div>
  );
};

export default Avatar;
