import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInput = (e) => {
        const value = e.target.value;
        setInputValue(value);
    }

    const handleSubmit = (e) => {
       e.preventDefault();
       if (inputValue.trim().length > 2) {
        setCategories(cats => [inputValue, ...cats]);
        setInputValue('');
       }
    };


    return (
        <form onSubmit={handleSubmit}>
          <input
          type='text'
          value={inputValue}
          onChange={handleInput}
          placeholder='Dragon Ball'
          className='input-search'
          aria-label='Search a gif'
        />
        </form>
    )

};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}


