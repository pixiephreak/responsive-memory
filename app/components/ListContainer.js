import React, { Component } from "react";
import GifListItem from './GifListItem';
// import ListItem from './listItem';



  const Gifs = (props) => {

      const gifItems = props.gifs.map(gif=> <GifListItem
      onSelect = {props.onSelect}
      key={gif.id}
      gif={gif.images.fixed_height}/>
    );

    return(
      <ul className='col-md-4 list-group'>
        {gifItems}
      </ul>
    )
  }


export default Gifs;
