import React, {useState} from "react";
function Sample() {

  const intro = <h1>Hello, My name is Swati</h1>;

  const newElement = React.createElement(
    "a", 
    {href: 'https://github.com/swati-singh-99/Work-Frontend'}, 
    "This is my github link"
  );
  
  const course = "Master of Computer Application";
  const education = <h2>I am Pursuing {course}</h2>;

  const style = { color: "green", backgroundColor: "lightgray", width:"40%", margin:"auto" };
  const list = <ul style={style}><li>Improved Readability</li><li>Seamless JavaScript Integration</li></ul>
  
  const styling = { margin:"20px", padding:"10px"};
  const button = <button style={styling} onClick={handleState}>Change State</button>;

  const [state, setState] = useState("Previous State");

  function handleState(){
     setState("Next State")
  }

  const [value, setValue] = useState(''); 
  const inputElement = React.createElement(
    'input', 
    {
      type: 'text',
      value: value, 
      onChange: handleValue, 
    }
  );

  function handleValue(event) {
    setValue(event.target.value);
  }

  return (
    <>
     {intro}

     {newElement}

     {education}

     <div style={style}>
      <h3>Concepts of JSX</h3>
      {list}
      </div>

     {state}
     {button} 

     <div style={styling}>
     {inputElement}
     <h2>Input Value is: {value}</h2>
     </div>
    </>
  )
}

export default Sample
