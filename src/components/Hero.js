import React from 'react'
import Nav from './Nav'
import Search from './Search'
function Hero() {
  return (
    <section className='wrapper'>
        <header className='container'>
            <article className='hero'>
                <Nav />
                <Search />
                <div className='overlay'></div>
            </article>
        </header>
    </section>
  )
}

export default Hero