import { useState, useEffect, useCallback, useRef } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const nameInputRef = useRef(null);

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  const handleSubmit = useCallback(() => {
    if (name && pass) {
      setIsSubmitted(true);
      alert(`Form Submitted with Name: ${name} & Password: ${pass}`);
    }
  }, [name, pass]);

  useEffect(() => {
    if (isSubmitted) {
      setName('');
      setPass('');
      setIsSubmitted(false);
    }
  }, [isSubmitted]);

  return (
    <div className="container">
      <div className="form-container">
        <h1>Form Submission</h1>
        <input
          ref={nameInputRef}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your Name"
          className="input-field"
        />
        <input
          type="text"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Enter your Password"
          className="input-field"
        />
        <button onClick={handleSubmit} className="submit-button">
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
