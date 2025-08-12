import React from 'react'

const UserList = () => {
  return (
    <div>
      <h1 className='title is-1 has-text-centered'>Users</h1>
      <h3 className='subtitle is-1 has-text-centered'>List Of Users</h3>
      <table className='table is-fullwidth is-bordered is-striped is-hoverable'>
        <thead>
          <tr>
            <th>No</th>
            <th>Email</th>
            <th>Name</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default UserList