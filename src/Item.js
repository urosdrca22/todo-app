import React, { useState } from 'react';

const Item = ({ id, title, handleCheckItem }) => {
    
    return (
        <div  className='task'>
            <input
                type='checkbox'
                id={title}
                onChange={() => {handleCheckItem(id)}}
            />
            <label htmlFor={title}>
                <span className='custom-checkbox'></span>
                {title}
            </label>
        </div>
    )
}

export default Item;