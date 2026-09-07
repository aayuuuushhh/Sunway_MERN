import React, { useState } from 'react'

const ProductForm = () => {
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [isDamage, setIsDamage] = useState("no")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ name, quantity, price, category, isDamage })
  }

  return (
    <form onSubmit={handleSubmit}>
        <h2>Create Product</h2>
        <div style={{marginTop:"20px"}}>
            <label>Name of the product:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div style={{marginTop:"20px"}}>
            <label>Quantity:</label>
            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </div>
        <div style={{marginTop:"20px"}}>
            <label>Price:</label>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div style={{marginTop:"20px"}}>
            <label>Category:</label>
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div style={{marginTop:"20px"}}>
            <label>IsDamage:</label>
            <input type="radio" name="dmg" value="yes" checked={isDamage === "yes"} onChange={(e) => setIsDamage(e.target.value)} /> Yes
            <input type="radio" name="dmg" value="no" checked={isDamage === "no"} onChange={(e) => setIsDamage(e.target.value)} /> No
        </div>
        <div style={{marginTop:"20px"}}>
            <button type="submit">Submit</button>
        </div>
    </form>
  )
}

export default ProductForm
