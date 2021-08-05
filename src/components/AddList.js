
import React, { useState } from 'react';


const AddList = prop => {
   
    const [textData, setText] = useState('');

   
    const submitHandler = event => {
        event.preventDefault();


        const addData = {
            id: (Math.random()).toString(),
                text: textData
    };

    prop.nh(addData);
    setText('');

       



};

    const inputHandler = event => {
        event.preventDefault();
        setText(event.target.value);
    };



return (
    <div>
        <form onSubmit={submitHandler}>
            <input type="text" value={textData} onChange={inputHandler} />
            <button type='submit' >Add in List</button>
        </form>
    </div>
);
};

export default AddList;