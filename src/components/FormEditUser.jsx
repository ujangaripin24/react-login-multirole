import React from 'react'

const FormEditUser = () => {
  return (
    <div>
      <h1 className='title is-1 has-text-centered'>Users</h1>
      <h3 className='subtitle is-1 has-text-centered'>Ipdate New User</h3>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form action="">
              <div className="field">
                <label htmlFor="" className="label">Name</label>
                <div className="control">
                  <input type="text" className="input" placeholder='Name' />
                </div>
              </div>
              <div className="field">
                <label htmlFor="" className="label">Email</label>
                <div className="control">
                  <input type="text" className="input" placeholder='Email' />
                </div>
              </div>
              <div className="field">
                <label htmlFor="" className="label">Password</label>
                <div className="control">
                  <input type="password" className="input" placeholder='*****' />
                </div>
              </div>
              <div className="field">
                <label htmlFor="" className="label">Confirm Password</label>
                <div className="control">
                  <input type="password" className="input" placeholder='*****' />
                </div>
              </div>
              <div className="field">
                <label htmlFor="" className="label">Role</label>
                <div className="control">
                  <select name="" id="">
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                </div>
              </div>
              <div className="field mt-5">
                <div className="control">
                  <button className="button is-success">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormEditUser