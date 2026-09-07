import React from 'react'

const UpdateForm = () => {
  return (
    <div>
        <h3>Update Product</h3>
        <div style={{marginTop:"20px"}}>
            <label htmlFor="">Product Id:</label>
            <input type="text" />
        </div>
        <div style={{marginTop:"20px"}}>
            <label htmlFor="">Name of the product:</label>
            <input type="text" />
        </div>
        <div style={{marginTop:"20px"}}>
            <label htmlFor="">Quantity:</label>
            <input type="number" />
        </div>
        <div style={{marginTop:"20px"}}>
            <label htmlFor="">Price:</label>
            <input type="number" />
        </div>
        <div style={{marginTop:"20px"}}>
            <button>Update</button>
        </div>
    </div>
  )
}

export default UpdateForm
