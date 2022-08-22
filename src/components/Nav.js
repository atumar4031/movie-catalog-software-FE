import React from 'react'


function Nav() {
  return (
    <section className='wrapper'>
        <article className='container'>
            <nav className='nav top-nav'>
                <h3 className='logo'>Movie <span className='logo-add'>Catalog</span></h3>
                <ul className='menu'>
                    <li className='menu-item'>Catalog</li>
                    <li className='menu-item'>Rating</li>
                    <li className='menu-item register'>sign up</li>
                    <li className='menu-item login'>Login</li>
                </ul>
            </nav>
        </article>
    </section>
  )
}

export default Nav