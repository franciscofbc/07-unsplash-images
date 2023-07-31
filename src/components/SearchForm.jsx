import React, { useState } from 'react'

const SearchForm = () => {
  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(search);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name='search'
          placeholder='cat' className='search-input'
          value={search}
          onChange={e => setSearch(e.target.value)} />
        {/* form-input */}
        <button type='submit'>search</button>
      </form>
    </div>
  )
}

export default SearchForm