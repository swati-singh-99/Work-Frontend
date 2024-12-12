import React , {useMemo, useState} from 'react'

function UseMemo() {
    const [sortOrder, setSortOrder] = useState('asc');

    const numbers = [5, 2, 8, 1, 4, 7];
  
    const sortedNumbers = useMemo(() => 
        numbers.sort((a, b) => (sortOrder === 'asc' ? a - b : b - a)), 
        [sortOrder, numbers]
      );
      

    return (
        <div className="max-w-lg my-28 mx-auto p-4 bg-gray-100 rounded-md shadow-md">
        <div className="flex justify-center gap-4 mb-4">
          <button onClick={() => setSortOrder('asc')}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">Ascending</button>
          <button onClick={() => setSortOrder('desc')} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">Descending</button>
        </div>
        <div>
          {sortedNumbers.map((number, index) => (
            <div key={index}>{number}</div>
          ))}
        </div>
      </div>
    )
}

export default UseMemo
