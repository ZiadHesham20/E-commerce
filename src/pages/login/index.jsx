

import axios from 'axios';
import Joi from 'joi';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import $ from "jquery";

export default function login(props) {

  const router = useRouter()

function passwordVisibility() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

  const [user, setUser] = useState({
    email:'',
    password:''
  })
  

  const [validationError, setValidationError] = useState({
    email: null,
    password: null,
  })
  const [authError, setAuthError] = useState(null)



  function getUser(e) {
    $(`#${e.target.id}`).removeClass('is-invalid');
    let idOfInput = e.target.id
    let valueOfInput = e.target.value;
    let myUser = {...user}
    myUser[idOfInput] = valueOfInput;
    setUser(myUser);
    
  }


  function submitMyForm(e) {
    e.preventDefault();
    const schema = Joi.object({
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
      password: Joi.string().min(8).pattern(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]+$/i)
  });
  let validationResult = schema.validate(user,{abortEarly: false});
  
  if (validationResult.error == undefined) {
    props.users.map((elem)=>{
      if (user.email == elem.email && user.password == elem.password && elem.is_admin == 'User') {
        localStorage.setItem('loggedin' ,true)
        localStorage.setItem('user',user.email)
        localStorage.setItem('role',elem.is_admin)
       router.push('./')
      }
      else if (user.email == elem.email && user.password == elem.password && elem.is_admin == 'admin') {
        localStorage.setItem('loggedin' ,true)
        localStorage.setItem('user',user.email)
        localStorage.setItem('role',elem.is_admin)
       router.push('./dashboard')
      }
      else{
        setAuthError('User is not found')
      }
    })
  }
  else{
    let validationErrorKey = validationResult.error.details.map(elem=>elem.context.label);
      let verror = {...validationError}
      
      validationErrorKey.forEach(myfunction)

      function myfunction(item){
        verror[`${item}`] = 'Theres error'
        
      }

     
      setValidationError(verror);
  }
  }


  return <>
  
    <section className="vh-100 d-flex justify-content-center align-items-center">
  <div className="container-fluid ">
    <div className="row d-flex justify-content-center align-items-center gy-4">
    <div className='col-12 d-flex justify-center pb-20'>
      <div>
      <img src="./loginlogo.png" alt="Sigma" className='w-100'/>
      </div>
    </div>
      <div className="col-md-9 col-lg-6 col-xl-5 d-flex justify-center">
        <img src="./Secure-login2.svg" className="w-75" alt="Sample image"/>
      </div>
      <div className="col-md-8 shadow-lg p-5 rounded-4 col-lg-6 col-xl-4 offset-xl-1">
        <h1>Login</h1>
        {authError == null ? "":<div className='alert alert-danger'>{authError}</div>}
        <form method="post" onSubmit={submitMyForm}>
          {validationError.email != null ? <div className="form-outline mb-4">
          <label className="form-label" htmlFor="email">Email Address</label>
            <input type="email" onChange={getUser} name="email" id="email" className="form-control  is-invalid form-control-lg shadow-sm" placeholder="name@example.com" required/>
            <div id="validationServerUsernameFeedback" className="invalid-feedback">
            - Email must end with .com or .net
            </div>
          </div>:<div className="form-outline mb-4">
          <label className="form-label" htmlFor="email">Email Address</label>
            <input type="email" onChange={getUser} name="email" id="email" className="form-control focsinput form-control-lg shadow-sm" placeholder="name@example.com" required/>
          </div>}


          {validationError.password != null ? <div className="form-outline mb-3 position-relative">
          <label className="form-label" htmlFor="password">Password</label>
            <input onChange={getUser} type="password" name="password" id="password" className="form-control is-invalid form-control-lg" placeholder="Enter password" required/>
            <div id="validationServerUsernameFeedback" className="invalid-feedback">
             - Password must be more than 8 characters.
            </div>
            <div id="validationServerUsernameFeedback" className="invalid-feedback">
             - Password must begin with capital letter and contain number.
            </div>
            <i onClick={passwordVisibility} className="fa-solid fa-eye position-absolute top-12 end-9 index cursor-pointer"></i>
            
          </div>:<div className="form-outline mb-3 position-relative">
          <label className="form-label" htmlFor="password">Password</label>
            <input onChange={getUser} type="password" name="password" id="password" className="form-control focsinput shadow-sm form-control-lg" placeholder="Enter password" required/>
            <i onClick={passwordVisibility} className="fa-solid fa-eye position-absolute top-12 end-2 index cursor-pointer"></i>
            
          </div>}
          
          <div className="d-flex justify-content-between align-items-center">
          
           
          </div>

          <div className="text-center text-lg-start mt-2 py-2">
            <button type="submit" className="btn btn-color btn-lg">Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link href='./signUp' className="link-danger">Register</Link></p>
          </div>

        </form>
      </div>
    </div>
  </div>

</section>
  </>
  
}
export const getStaticProps = async()=>{

  let {data} = await axios.get('http://localhost:3000/api/getusers');
  

  return{
    props:{
      users : data,
      
    }
  }
}