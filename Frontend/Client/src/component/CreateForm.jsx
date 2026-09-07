import React from 'react'

const CreateForm = () => {
  return (
    <div>
        <h3>Create Product</h3>
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
            <label htmlFor="">Category:</label>
            <input type="text" />
        </div>
        <div style={{marginTop:"20px"}}>
            <button>Create</button>
        </div>
    </div>
  )
}

export default CreateForm
