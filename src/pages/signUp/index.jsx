
import axios from 'axios';
import Joi from 'joi';
import Cookies from 'js-cookie';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import $ from "jquery";

export default function signUp() {
  const router = useRouter()

  const [user, setUser] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",
  })
  const [validationError, setValidationError] = useState({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    confirmPassword: null,
  })
  const [authError, setAuthError] = useState(null)


  function passwordVisibility() {
    var x = document.getElementById("password");
    var y = document.getElementById("confirmPassword");
    if (x.type === "password" && y.type === "password") {
      x.type = "text";
      y.type = "text";
    } else {
      x.type = "password";
      y.type = "password";
    }
  }

//Get Data From Form Inputs
  function getUser(e) {
    $(`#${e.target.id}`).removeClass('is-invalid');
    let idOfInput = e.target.id
    let valueOfInput = e.target.value;
    let myUser = {...user}
    myUser[idOfInput] = valueOfInput;
    setUser(myUser);
    
  }
// Validation
  async function submitMyForm(e){
    e.preventDefault();
    const schema = Joi.object({
      firstName: Joi.string().pattern(/^[A-Za-z]*$/).min(3),
      lastName: Joi.string().pattern(/^[A-Za-z]*$/).min(3),
      age: Joi.number(),
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
      password: Joi.string().min(8).pattern(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]+$/i),
      confirmPassword: Joi.ref('password')
  });
  let validationResult = schema.validate(user,{abortEarly: false});
  
    
    if (validationResult.error == undefined) {
      let {data} = await axios.post('http://localhost:3000/api/registerusers',user)
      
      
      if (data.message == 'Email already exists') {
        
        setAuthError(data.message)
      }else{
       router.push('./login')
      }
    }else{
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
    <div className='col-12 d-flex pt-5 justify-center'>
      <div>
      <img src="./loginlogo.png" alt="Sigma" className='w-100'/>
      </div>
    </div>
    <div className="col-md-9 col-lg-6 col-xl-5 d-flex justify-center">
        <img src="./Secure-login2.svg" className="w-1/2 lg:w-3/4" alt="Sample image"/>
      </div>
      <div className="col-md-8 shadow-lg p-5 rounded-4 col-lg-6 col-xl-4 offset-xl-1">
        <h1>SignUp</h1>
        <form method="post" onSubmit={submitMyForm}>
    <div className="form-outline mb-3 row">
    {authError != null ? <div className='alert alert-danger'>{authError}</div>:""}
         {validationError.firstName == null ? <div className="col-6">
         <label className="form-label" htmlFor="firstName">First Name</label>
            <input onChange={getUser} type="text" name='first_name' id="firstName" className="form-control focsinput form-control-md shadow-sm" placeholder="Enter first name" required/>
         </div>:<div className="col-6">
         <label className="form-label" htmlFor="firstName">First Name</label>
            <input onChange={getUser} type="text" name='first_name' id="firstName" className="form-control is-invalid form-control-md shadow-sm" placeholder="Enter first name" required/>
            <div id="validationServerUsernameFeedback" className="invalid-feedback">
             - More than 3 characters
            </div>
            <div id="validationServerUsernameFeedback" className="invalid-feedback">
             - Letters only
            </div>
         </div>}

        
         {validationError.lastName == null ?<div className="col-6">
         <label className="form-label" htmlFor="lastName">Last Name</label>
            <input onChange={getUser} type="text" name="last_name" id="lastName" className="form-control form-control-md focsinput shadow-sm" placeholder="Enter last name" required/>
         </div>:<div className="col-6">
         <label className="form-label" htmlFor="lastName">Last Name</label>
            <input onChange={getUser} type="text" name="last_name" id="lastName" className="form-control is-invalid form-control-md shadow-sm" placeholder="Enter last name" required/>
            <div id="validationServerUsernameFeedback" className="invalid-feedback">
             - More than 3 characters
            </div>
            <div id="validationServerUsernameFeedback" className="invalid-feedback">
             - Letters only
            </div>
         </div>}

          </div>


  <div className="form-outline mb-3 row">
    <div className='col-6'>
    <label className="form-label" htmlFor="age">Age</label>
            <input onChange={getUser} type="number" name="age" id="age" className="form-control form-control-md focsinput shadow-sm" placeholder="Enter your age" required/>

    </div>
  </div>

          
          {validationError.email == null ? <div className="form-outline mb-3">
          <label className="form-label" htmlFor="email">Email address</label>
            <input onChange={getUser} type="email" name="email" id="email" className="form-control form-control-md focsinput shadow-sm" placeholder="name@example.com" required/>
          </div>:<div className="form-outline mb-3">
          <label className="form-label" htmlFor="email">Email address</label>
            <input onChange={getUser} type="email" name="email" id="email" className="form-control is-invalid form-control-md shadow-sm" placeholder="name@example.com" required/>
            <div id="validationServerUsernameFeedback" className="invalid-feedback">
             - Email must end with .com or .net
            </div>
          </div>}

     
          
          {validationError.password == null ?<div className="form-outline mb-3 position-relative">
          <label className="form-label" htmlFor="password">Password</label>
            <input onChange={getUser} type="password" name="password" id="password" className="form-control form-control-md focsinput shadow-sm" placeholder="Enter password" required/>
            <span id="passwordHelpInline" className="form-text">
      Must be more than 8 characters long.
      </span>
      <i onClick={passwordVisibility} className="fa-solid fa-eye position-absolute top-11 end-2 index cursor-pointer"></i>
          </div>:<div className="form-outline mb-3 position-relative">
          <label className="form-label" htmlFor="password">Password</label>
            <input onChange={getUser} type="password" name="password" id="password" className="form-control form-control-md focsinput shadow-sm is-invalid" placeholder="Enter password" required/>
            <div id="validationServerUsernameFeedback" className="invalid-feedback">
             - Password must be more than 8 characters.
            </div>
            <div id="validationServerUsernameFeedback" className="invalid-feedback">
             - Password must Begin with capital letter and contain number.
            </div>
            <i onClick={passwordVisibility} className="fa-solid fa-eye position-absolute top-11 end-8 index cursor-pointer"></i>
          </div>}
          
      {validationError.confirmPassword == null ? <div className="form-outline mb-3 position-relative">
          <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
      <input onChange={getUser} className='form-control form-control-md focsinput shadow-sm' id='confirmPassword' type="password" name='confirmPassword' placeholder="Confirm your password" required/>
      <i onClick={passwordVisibility} className="fa-solid fa-eye position-absolute top-11 end-2 index cursor-pointer"></i>
      </div>:<div className="form-outline mb-3 position-relative">
          <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
      <input onChange={getUser} className='form-control form-control-md focsinput is-invalid shadow-sm' id='confirmPassword' type="password" name='confirmPassword' placeholder="Confirm your password" required/>
      <div id="validationServerUsernameFeedback" className="invalid-feedback">
             - It does not match your password
      </div>
      <i onClick={passwordVisibility} className="fa-solid fa-eye position-absolute top-11 end-8 index cursor-pointer"></i>
      </div>}

          <div className="text-center text-lg-start mt-3 pt-2">
            <button type="submit" className="btn btn-color btn-lg">SignUp</button>
              <p className="small fw-bold mt-2 pt-1 mb-0">I already have an account <Link href="./login" className="link-danger">Login</Link></p>
          </div>

        </form>
      </div>
    </div>
  </div>

</section>
  </>
}
