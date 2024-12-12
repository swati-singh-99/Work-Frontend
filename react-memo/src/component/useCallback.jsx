import React, {useCallback, useState} from 'react'
import Button from './reactMemo';


function UseCallback() {
    const [count, setCount] = useState(0);

    const handlePlus = useCallback(() => {
        setCount(prevCount => prevCount + 1);
      }, []);

      const handleMinus = useCallback(() => {
        setCount(prevCount => prevCount - 1);
      }, []);
    return (
        <div className="p-6 items-center m-48 justify-center">
      <h2 className='m-10'>Count: {count}</h2>
      <div className='space-x-5'>
      <Button label="Increment" handleClick={handlePlus} />
      <Button label="Decrement" handleClick={handleMinus} />
      </div>
    </div>
    )
}

export default UseCallback
