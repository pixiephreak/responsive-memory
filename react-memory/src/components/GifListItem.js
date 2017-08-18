import React from 'react';

const GifListItem = ({gif, onSelect}) => {
  console.log(gif);
  const gifImage = gif.url;
  return (

    <div onClick={() => onSelect(gif)} className='media'>
      <img className='card img-fluid img-thumbnail square' src={gifImage}/>
    </div>

  )
}

export default GifListItem;
