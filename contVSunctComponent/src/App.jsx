import { useState , useRef } from 'react'
import './App.css'

function App() {
  const [controlledEmail, setControlledEmail] = useState('');
  const uncontrolledEmailRef = useRef();

  const handleControlledSubmit = (e) => {
    e.preventDefault();
    alert(`Controlled Form Submitted: ${controlledEmail}`);
    setControlledEmail('');
  };

  const handleUncontrolledSubmit = (e) => {
    e.preventDefault();
    alert(`Uncontrolled Form Submitted: ${uncontrolledEmailRef.current.value}`);
    uncontrolledEmailRef.current.value = '';
  };

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold text-gray-800">Controlled and Uncontrolled Forms</h1>

      <form onSubmit={handleControlledSubmit} className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">Controlled Form</h2>
        <div className="flex items-center gap-4">
          <input
            type="email"
            value={controlledEmail}
            onChange={(e) => setControlledEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>

      <form onSubmit={handleUncontrolledSubmit} className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">Uncontrolled Form</h2>
        <div className="flex items-center gap-4">
          <input
            type="email"
            ref={uncontrolledEmailRef}
            placeholder="Enter your email"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default App
