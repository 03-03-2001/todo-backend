import React, { useState } from 'react'

function SearchBar({ onSearch }) {
  const [keyword, setKeyword] = useState('')

  return (
    <div className='search-container'>
      <input
        type='text'
        placeholder='Search Task'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick={() => onSearch(keyword)}>
        Search
      </button>
    </div>
  )
}

export default SearchBar;
