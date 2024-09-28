/* eslint-disable react/no-unescaped-entities */
import   { useEffect, useState } from 'react'

const UseEffectop2 = () => {
const [widthcount, setwidthcount] = useState(window.screen.width)

const actualWidth=()=>{
   
    setwidthcount(window.innerWidth)
    
}

useEffect(()=>{
    window.addEventListener("resize",actualWidth)


    return ()=>{
        window.removeEventListener("resize",actualWidth)
    }
},[widthcount])

  return (
 <>
 <hr />
 <p>The Actual size of the Window : (By Using "Clean Function")</p>
 <h3>{widthcount}</h3>
 
 </>
  )
}

export default UseEffectop2
