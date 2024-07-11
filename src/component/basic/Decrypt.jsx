import React, { useRef, useState } from 'react';
import bcrypt from'bcryptjs';

const DecryptComponent = () => {
  const emailInputRef=useRef();
  const passwordInputRef=useRef();

  const singup =(e)=>{
    e.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
   console.log("normalpassword:================================================================",password)
    const hashpassword =bcrypt.hashSync(password,10)
   console.log("hashpassword:================================================================",hashpassword)

    window.localStorage.setItem('login',JSON.stringify({email,hashpassword}))
  }
  const login=(e)=>{
    e.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    
    const gethashpassword =JSON.parse(window.localStorage.getItem('login')).hashpassword
    console.log("gethashpassword-------",gethashpassword)

bcrypt.compare(password,gethashpassword,function(err,match){
    if(err){
        throw  err;
    }else if(match){
        console.log("password match")
    }else{
        console.log("password not match")
    }
})


}

  return (
    <div>
   
      <input
        type="email"
        placeholder="email"
       ref={emailInputRef}
      />
      <input
        type="password"
        placeholder="password"
        ref={passwordInputRef}
       
      />
      <button type='submit' onClick={(e)=>{singup(e)}}>singup</button>
      <button type='submit' onClick={(e)=>{login(e)}}>login</button>

      
    </div>
  );
};

export default DecryptComponent;
