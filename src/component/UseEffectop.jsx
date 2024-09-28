import { useEffect, useState } from "react"


const UseEffectop = () => {

    const [count,setcount] = useState(0)

useEffect(()=>{
 if (count >=1){
    document.title=`Chats(${count})`
 }else{
    document.title=`Chats`
 }
    
},[count])

  return (
    <div>
        <h3><u>UseEffect</u></h3>
        <p>Look Up (title of the Page)</p>
      <h1>{count}</h1>
      <button onClick={()=> setcount(count+1)}>Click me </button>
    </div>
  )
}

export default UseEffectop
