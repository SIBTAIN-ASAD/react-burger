import React from "react";
import { useState } from "react";


const TextData = () => {
    
    // State Variable to hold the text
    const [text, setText] = useState("Enter Text Here");
    
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    
    const handleOnClick = () => { // upper case
        let newText = text.toUpperCase();
        setText(newText);
    }


    return (
        <div>
                <textarea onChange={handleOnChange} value={text} /> 
                <br />
                <button onClick={handleOnClick}>Convert to Upper Case</button>
        </div>
    )
}   

export default TextData;
