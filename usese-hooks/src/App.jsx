import { useState, useEffect, useRef, useMemo } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("The count has changed to", count);
  }, [count]); 

  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count; 
  });

  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  const expensiveComputation = useMemo(() => {
    console.log("useMemo: Performing expensive computation...");
    return count * 10; 
  }, [count]); 

  

  return (
    <>
     <div>
      <p>Current Count: {count}</p>
      <p>Previous Count : {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <h3>Render Count</h3>
      <p>This component has rendered {renderCount.current} times.</p>

      <p>Expensive Computation Result: {expensiveComputation}</p>
    
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>Result: {input}</p>
    </div>
    </>
  )
}

export default App
