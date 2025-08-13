import React from 'react'

const FormEditProduct = () => {
    return (
        <div>
            <h1 className='title is-1 has-text-centered'>Products</h1>
            <h3 className='subtitle is-1 has-text-centered'>Add New Product</h3>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form action="">
                            <div className="field">
                                <label htmlFor="" className="label">Name</label>
                                <div className="control">
                                    <input type="text" className="input" placeholder='Product Name' />
                                </div>
                            </div>
                            <div className="field">
                                <label htmlFor="" className="label">Price</label>
                                <div className="control">
                                    <input type="text" className="input" placeholder='Product Price' />
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

export default FormEditProduct