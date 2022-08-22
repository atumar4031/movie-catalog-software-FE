import React from 'react'

function SignUp() {
  return (
     <section className='wrapper'>
        <main className='container form-container'>
            <article className='login-container'>
                <input type={'text'} placeholder="email"/>
                <input type={'password'} placeholder="password"/>
                <input type={'password'} placeholder="Re-type password"/>
                <button>Register</button>
                <p className='footer-text'>already have account? <a href='#'>login</a></p>
            </article>
        </main>
    </section>
  )
}

export default SignUp