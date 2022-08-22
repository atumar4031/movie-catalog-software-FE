import React from 'react'

function Login() {
  return (
    <section className='wrapper'>
        <main className='container form-container'>
            <article className='login-container'>
                <input type={'text'} placeholder="email"/>
                <input type={'password'} placeholder="password"/>
                <button>login</button>
                <p className='footer-text'>don't have account? <a href='#'>create</a></p>
            </article>
        </main>
    </section>
  )
}

export default Login