import { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('Swati Singh');

  let content;
  if (isLoggedIn) {
    content = (
      <div className='flex flex-col'>
        <h2 className="text-3xl font-bold">Welcome, {name}!</h2>
        <p>You are now logged in.</p>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Change your name" 
          className="mt-8 p-3 border border-gray-500 rounded-md"
        />
        <h5>If you want to change name type it in above field!</h5>
        <button 
          onClick={() => setIsLoggedIn(false)} 
          className="mt-8 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-800"
        >
          Log Out
        </button>
      </div>
    );
  } else {
    content = (
      <div className="text-center">
        <h2 className="text-2xl font-bold">Please log in to continue</h2>
        <button 
          onClick={() => setIsLoggedIn(true)} 
          className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        >
          Log In
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      {content}
    </div>
  );
}

export default App;
