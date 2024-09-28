import  { useState } from 'react'

const UseStateObject = () => {

 const [myObject ,setmyObject]=useState({
     myName:"?" , age : "?" , degree : "b.tech"
})
const change=()=>{
    setmyObject({...myObject, myName:"Aryan Singh" , age:21})
}
  return (
    <>
    <h4>Name : {myObject.myName} & Age : {myObject.age}</h4>
    <button onClick={change}>Update</button>

    </>
  )
}

export default UseStateObject
