import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'


export default function Sidebar() {

  const [selected, setSelected] = useState('Dashboard')
  const router = useRouter()

  function dashboard() {
    setSelected('Dashboard')
  }
  function users() {
    setSelected('Users')
  }
  function cats() {
    setSelected('Categories')
  }
  function products() {
    setSelected('Products')
  }


  function logoutHandel(){
    localStorage.clear()
    router.push('./login')
  }

  return (
    
    <div className='col-2 bg-dark ps-0 position-fixed'>
      <div>
      <div className="d-flex flex-column flex-shrink-0 p-3 vh-100" >
      <div>
      <img src="./logo.png" alt="Sigma" className='w-100'/>
      </div>
    
    <ul className="nav nav-pills flex-column mb-auto">
    {selected == 'Dashboard'? <li  className="nav-item">
        <Link href="./dashboard" id='Dashboard' className="nav-link btn-color text-dark" aria-current="page">
          Dashboard
        </Link>
      </li>:<li onClick={dashboard} className="nav-item">
        <Link href="./dashboard" id='Dashboard' className="nav-link text-white " aria-current="page">
          Dashboard
        </Link>
      </li>}
      {selected == 'Users'?<li  className="nav-item">
      <Link  href="./users" id='Users' className="nav-link btn-color text-dark" aria-current="page">
          Users
        </Link>
      </li>:<li onClick={users} className="nav-item">
      <Link  href="./users" id='Users' className="nav-link text-white" aria-current="page">
          Users
        </Link>
      </li>}
      {selected == 'Categories'?<li className="nav-item">
      <Link href="./categories" className="nav-link btn-color text-dark" aria-current="page">
          Categories
        </Link>
      </li>:<li onClick={cats} className="nav-item">
      <Link href="./categories" className="nav-link text-white" aria-current="page">
          Categories
        </Link>
      </li>}
      {selected == 'Products'? <li className="nav-item">
      <Link href="./products" className="nav-link  btn-color text-dark" aria-current="page">
          Products
        </Link>
      </li>:<li onClick={products} className="nav-item">
      <Link href="./products" className="nav-link text-white" aria-current="page">
          Products
        </Link>
      </li>}
    </ul>
    
    <div className='d-flex align-items-center'>
    <i className="fa-solid fa-right-from-bracket text-warning fa-rotate-180 "></i>
     <button onClick={logoutHandel} className='btn text-light ms-1'>
      Logout
     </button>
    </div>
  </div>
    </div>
    </div>
  )
}
