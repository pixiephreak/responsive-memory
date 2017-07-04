import React from 'react';

const GifListItem = ({gif, onSelect}) => {
  console.log(gif);
  const gifImage = gif.url;
  return(
    <li onClick={()=> onSelect(gif)} className='list-group-item'>
    <div className= 'media'>
      <img className='media-object' src={gifImage}/>
    </div>
    </li>
  )
}

export default GifListItem;
