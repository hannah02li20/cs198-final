import React from 'react';

const Restaurant = (props) => {
    return (<button onClick={() => props.handleClick(props.color)}> Post {props.restaurant} </button>
    );


}

