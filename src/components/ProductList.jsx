import React from 'react'

const ProductList = () => {
  return (
    <div>
      <h1 className='title is-1 has-text-centered'>Product</h1>
      <h3 className='subtitle is-1 has-text-centered'>List Of Product</h3>
      <table className='table is-fullwidth is-bordered is-striped is-hoverable'>
        <thead>
          <tr>
            <th>No</th>
            <th>Name Product</th>
            <th>Price</th>
            <th>Created By</th>
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

export default ProductList