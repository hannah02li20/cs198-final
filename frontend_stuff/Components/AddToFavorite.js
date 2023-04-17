import React from 'react';
import Restaurant from './Restaurant';


const addToFavorite = (props) => { 

    return (
      <div className="addToFavorite">
          <Favorite handleClick = {props.handleClick} favorited = "res-favorited"> </Favorite>
      </div>
    );
}

export default addToFavorite;



// import React from 'react';
// // import React, { useState } from 'react';
// import Color from './Color';

// const Menu = (props) => { 

//     return (
//       <div className="colorOptions">
//           <Color handleClick = {props.handleClick} color = "red"> </Color>
//           <Color handleClick = {props.handleClick} color = "pink"></Color>
//           <Color handleClick = {props.handleClick} color = "blue" ></Color>
//           <Color handleClick = {props.handleClick} color ="green"></Color>
//       </div>
//     );
// }

// export default Menu;