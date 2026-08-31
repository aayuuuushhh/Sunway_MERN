import React from 'react'

const Form = () => {

  return (
    <form>
        <div>
            <div style={{marginTop:"20px", color:"red", textAlign:"center", alignItems:"center"}}>
                <label>First Name:</label>
                <input type="text" name="" id="" /> <br />
            </div>
            <div style={{marginTop:"20px"}}>
                <label htmlFor="">Last name:</label>
                <input type="text" /><br />
            </div>
            <div style={{marginTop:"20px"}}>
                <label htmlFor="">Address:</label>
                <input type="text" /><br />
            </div>
            <div style={{marginTop:"20px"}}>
                <label htmlFor="">Contact:</label>
                <input type="number" /><br />
            </div>
            <div style={{marginTop:"20px"}}>
                <label htmlFor="">Email:</label>
                <input type="email" name="" id="" /><br />
            </div>
            <div style={{marginTop:"20px"}}>
                <label htmlFor="">Password:</label>
                <input type="password" name="" id="" /><br />
            </div>
            <div style={{marginTop:"20px"}}>
                <label htmlFor="">College</label>
                <input type="text" /><br />
            </div>
            <div>
                <button>Submit</button>
            </div>
        </div>
    </form>
  )
}

export default Form