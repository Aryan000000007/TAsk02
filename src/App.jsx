import { useState } from "react";
import UseStateArray from "./component/UseStateArray";
import UserStateObject from './component/UseStateObject'
import ShortCirEval from "./component/ShortCirEval";
import LoginForms from "./component/forms/LoginForms";
import UseEffectop from "./component/UseEffectop";
import UseEffectop2 from "./component/UseEffectop2";

import './App.css'



const App = () => {

  const [initialVal , setinitialVal]= useState("Hello User")

const Change =()=>{
let val = initialVal;

if(val=== "Hello User" ){
  setinitialVal("Aryan Singh")
}else{
  setinitialVal("Hello User")
}
  
}

  return (

    <>
    <h1>{initialVal}</h1><br />

    <button onClick={Change}>Click me 👍 </button> <br /><br /><br /><br />
    
    <UseStateArray/><br /><br />
    <UserStateObject/>
    <ShortCirEval/><br /><br />
    <LoginForms/><br /><br /><br /><br />
    <UseEffectop/><br /><br />
    <UseEffectop2/>
    <hr />

    </>
  )
}

export default App
