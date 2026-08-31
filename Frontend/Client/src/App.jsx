import React from 'react'
import About from './component/About'
import Sum from './component/Sum'
import Form from './component/Form'
import ProductForm from './component/ProductForm'

const App = () => {
  const name = "Aayush"
  const college = "Sunway College"
  const location = "Maitidevi"
  const course = "MERN Stack"

  return (
    <div>
      {/* <p style={{marginTop:"20px", color:"red", textDecoration:"underline"}}>Name is {name}</p>
      <p style={{marginTop:"40px", color:"yellow", fontWeight:"bold"}}>College is {college}</p>
      <p>Location is {location}</p>
      <p>Course is {course}</p>   
      <About/>
      <Sum />  */}
      {/* <Form/> */}
      <ProductForm/>
    </div>
  )
}

export default App