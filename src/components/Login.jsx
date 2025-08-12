import React from 'react'

const Login = () => {
  return (
    <section className="hero has-backgroud-grey-light is-success is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <form action="" className="box">
                <h1 className='title is-2 text-white'>Sign In</h1>
                <div className="field">
                  <label htmlFor="" className="label">Email</label>
                  <div className="controll">
                    <input type="text" className="input" placeholder='Email' />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="" className="label">Password</label>
                  <div className="controll">
                    <input type="password" className="input" placeholder='*****' />
                  </div>
                </div>
                <div className="field m-5">
                  <button className="button is-success is-fullwidth is-fullwidth">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login