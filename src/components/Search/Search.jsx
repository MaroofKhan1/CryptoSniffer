import './Search.css'
import { useState } from 'react' 
import React from 'react'

const Search = ({handleSearch}) => {
    const [search, setSearch] = useState('')
    const handleChange = (evt) => {
      console.log(evt.target.value)
        setSearch(evt.target.value)
    }
  return (
    <div className='search-bar'>
      <input className='check' value={search} onChange={handleChange} />
      <button onClick={() => handleSearch(search)}>Search</button>
    </div>
  )
}

export default Search;