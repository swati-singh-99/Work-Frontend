import React from 'react'

function ReactMemo({ label, handleClick }) {
    console.log(`${label} button re-rendered!`);
    return (
        <button onClick={handleClick} className="px-4 py-2 bg-blue-500 text-white rounded">
        {label}
      </button> 
    )
}

const Button = React.memo(ReactMemo);

export default Button
