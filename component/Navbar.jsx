import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import $ from "jquery";

export default function Navbar() {

  const [toggle, setToggle] = useState(true)
  const router = useRouter()
  function logoutHandel(){
    localStorage.clear()
    router.push('./login')
  }
  function showTheNav() {
    if(toggle != false){
      $('.toggelOfNav').css({"display":"block"})
    }else{
      $('.toggelOfNav').css({"display":"none"})
    }
  }

  useEffect(() => {
    $(".nav-link").on("click", function(){
      $(".nav-item").find(".active").removeClass("active");
      $(this).addClass("active");
   });
   
  }, [])
  

  
  return <>
 <nav className="navbar navwidth navbar-expand-lg bg-white m-auto index shadow-md ">
  <div className="container-fluid ">
  <Link className="navbar-brand" href="./"><div><img src="./Frame 2.png" alt="Sigma" className='w-100'/></div></Link>
    <button className="navbar-toggler" type="button" onClick={() => {setToggle(!toggle),showTheNav()}}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="toggelOfNav navbar-collapse">
      <ul className="navbar-nav  mb-2 mb-lg-0 align-items-center">
        <li className="nav-item mx-2">
          <Link className="nav-link fw-bold text-gray-950 active" aria-current="page" href="./">Home</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link fw-bold text-gray-950" href="./shop">Shop</Link>
        </li>
        
        <li className="nav-item mx-2">
          <Link className="nav-link fw-bold text-gray-950 " href={'./about'}>About</Link>
        </li>
        <li className="nav-item mx-2">
          <Link className="nav-link fw-bold text-gray-950 " href={'./contact'}>Contact</Link>
        </li>
        
        
      </ul>
      <ul className='navbar-nav ms-auto mb-2 mb-lg-0 '>
      <li className="nav-item active mx-2 align-self-center">
        <Link className="nav-link fw-bold text-gray-950" href={'./cart'}><i className="fa-solid fa-cart-shopping "></i></Link>
        </li>
        <li className="nav-item mx-2">
        <button onClick={logoutHandel} className='btn btn-danger'><i className="fa-solid fa-right-from-bracket text-white fa-rotate-180 "></i> logout</button>
        </li>
      </ul>
    </div>
  </div>
</nav>

  </>
}
