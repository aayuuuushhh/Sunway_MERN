import React from 'react'

const ProductForm = () => {
  return (
    <div>
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
            <input type="number" name="" id="" />
        </div>
        <div style={{marginTop:"20px"}}>
            <label htmlFor="">Category</label>
            <input type="text" />
        </div>
        <div style={{marginTop:"20px"}}>
            <label htmlFor="">IsDamage:</label>
            <input type="radio" name="dmg" id="" /> Yes
            <input type="radio" name="dmg" id="" /> No
        </div>
        <div>
            <button>Submit</button>
        </div>
    </div>
  )
}

export default ProductForm