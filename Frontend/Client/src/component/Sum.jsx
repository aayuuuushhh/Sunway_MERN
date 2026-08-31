import React from 'react'

const Sum = () => {
  const a = 5
  const b = 6

  return (
    <div>
      <p>Addition: {a} + {b} = {a + b}</p>
      <p>Subtraction: {a} - {b} = {a - b}</p>
      <p>Multiplication: {a} * {b} = {a * b}</p>
      <p>Division: {a} / {b} = {a / b}</p>
    </div>
  )
}

export default Sum