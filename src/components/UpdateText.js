import React, {useState, useRef} from "react";
import "../styles.css";

export default function UpdateText(){

    const inputRef = useRef(null);

    const [original, setOriginal] = useState(" ");

    function setText(){
        setOriginal(inputRef.current.value);
    }

    return(
        <div className="updateTextLayout">
            <div className="enter">
                <input type = "text" ref={inputRef}></input>
                <button type = "button" onClick={setText}>ENTER</button>
            </div>
            
            <h1>{original}</h1>
            <h1>{original}</h1>
            <h1>{original}</h1>
        </div>
    )
}