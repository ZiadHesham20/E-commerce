import React from 'react'
import Sidebar from './Sidebar'


export default function Layout({children}) {
  return <>
  <div className='container-fluid'>
      <div className='Dnav container-fluid bg-dark '>
        <div className='row justify-content-end '>
          <div className='col-6 d-flex justify-content-end pt-2 '>
          <div className='d-flex align-items-center'>
          <i class="fa-regular fa-user text-warning mx-2 p-2 rounded-circle border border-warning"></i>
          <div>
          <h5 className='text-white pt-1'>Admin Name</h5>
          </div>
          
        </div>
          </div>
        </div>
    </div>
    <div className='row justify-between'>
      <div className='col-2 ps-0 '>
      <Sidebar/>
      </div>
      <div className='col-10 pt-5'>
        <div>
          {children}
        </div>
      </div>
    </div>
  </div>
  </>
}
