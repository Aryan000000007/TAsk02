import {useState} from 'react'

const ShortCirEval = () => {

    const [demo ]=useState("")
  return (
    <div>
        <h2><u>Short_Circuit_Evaluation</u></h2>
        <h3>{demo || "Naam"}</h3>  
      <h2>{demo && "Aryan"}</h2>
    </div>
  )
}

export default ShortCirEval
