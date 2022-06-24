import React from 'react';

export const Card = ({className, name, msg}) => {
    return ( 
        <button className={className}>
            <img src="src/assets/img/up.png" className='thumb' alt="" />
            <h4>{name}</h4>
            <p>{msg}</p>
        </button>
    );
}
 