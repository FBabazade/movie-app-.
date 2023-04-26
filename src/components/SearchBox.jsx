import React from 'react'

function SearchBox(props) {
  return (
    <div><input value={props.value} onChange={(e)=>props.setSearchValue(e.target.value)} className='form-control'  placeholder='type movie name' /></div>
  )
}

export default SearchBox