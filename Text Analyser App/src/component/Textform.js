import React,{useState}from 'react'

export default function Textform(props) {

  const handleUpClick =()=>{
    // console.log("Uppercase was Clicked" + Text);
    let newText =Text.toUpperCase();
    setText(newText)
  }
  const handleLoClick =()=>{
    // console.log("Uppercase was Clicked" + Text);
    let newText =Text.toLowerCase();
    setText(newText)
  }

  const handleClrClick =()=>{
    // console.log("Uppercase was Clicked" + Text);
    let newText ='';
    setText(newText)
  }

  const handleOnChange =(event)=>{
    console.log("on change");
    setText(event.target.value);
  }
  const [Text, setText] = useState('');
  //setText("New Text")
  return (
    <>
<div class="mb-3">
      <h1>{props.heading}</h1>
      <label for="myBox" className="form-label"></label>
      <textarea className="form-control" id="myBox" rows="8" value={Text} onChange={handleOnChange}></textarea>
      <button className="btn btn-primary my-3"onClick={handleUpClick}>Convert To Uppercase</button>
      <button className="btn btn-primary mx-3"onClick={handleLoClick}>Convert To Lowercase</button>
      <button className="btn btn-primary mx-2"onClick={handleClrClick}>Clear Text</button>

      </div>
      <div className='container'>
        <h1>Your Text summery</h1>
        <p>{Text.split(" ").length} words and {Text.length} Letters</p>
        <p>{0.08*Text.split(" ").length} Minutes Read</p>
        <h3>Preview</h3>
        <p>{Text}</p>
      </div>
    </>
  )
}
