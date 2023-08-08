import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

    const [text, setText] = useState("");
    // const [word, setWord] = useState();
    // const [character, setChar] = useState();

    const handleOnChange = (event)=>{
        setText(event.target.value);

        // let newText = event.target.value;
        // setChar(newText.length);

        // let size = newText.split(" ");
        // setWord(size.length);

    }

    const handleUpClick =() =>{
       let newText = text.toUpperCase();
       setText(newText);
    }

    const handleLoClick =() =>{
        let newText = text.toLowerCase();
        setText(newText);
     }

     const handleClearClick =() =>{
        setText("");
     }


  return (
    <>
    <div className="container">
    <div className="mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label my-3">
            <h3>{props.heading}</h3>
        </label>
        <textarea type="text" className="form-control" id="formGroupExampleInput" value={text} onChange={handleOnChange} placeholder='Enter text here' rows={8}/>
    </div>
    <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Upper case</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lower case</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
    </div>

    <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter((element)=>element.length !==0).length}, Words  and {text.length}, Character</p>
    </div>
    
    </>
  )
}


TextForm.prototypes = {
    heading:PropTypes.string.isRequired,         //.isRequired for compulsary title props
}


//setting default props
TextForm.defaultProps = {
    heading: 'enter text here'
}
