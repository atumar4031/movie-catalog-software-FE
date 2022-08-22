import React from 'react'
import { RiSearch2Line } from 'react-icons/ri';

function Search() {
  return (
    <section className='search'>
        <article className='search-container'>
            <input type="text" placeholder="movie..." />
            <button><RiSearch2Line style={{fontSize:'1rem'}}/></button>
        </article>
    </section>
  )
}

export default Search