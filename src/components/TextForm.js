import React, { useState } from 'react'

export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", 'success')
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const handleLoClick = () => {
    setText(text.toLowerCase())
    props.showAlert("Converted to Lower Case", 'success')
  }

  const handleClClick = () => {
    setText("");
    props.showAlert("Text cleared", 'success')
  }
  const [text, setText] = useState("");
  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8" style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} disabled={text.length === 0}>
          Convert to UpperCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClClick} disabled={text.length === 0}>
          Clear</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick} disabled={text.length === 0}>Convert to LowerCase</button>
      </div>
      <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Your text summary</h1>
        <h5>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} charachters</h5>
        <h5>Time to read {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes</h5>
        <p className='my-2'>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  )
}
