import React from 'react'

export default function Footer() {
  return <>
  <footer className="container-fluid btn-color p-5">
    <div className='row costumewidth m-auto border border-start-0 border-end-0 border-top-0 border-dark-subtle pb-3'>
        <div className='col-lg-3 col-md-6 col-12'>
            <div>
                <h4 className="fw-bold">Categories</h4>
                <div className="text-gray-500">
                <p>Clothes</p>
                <p>Electronics</p>
                <p>Video Games</p>
                </div>
            </div>
        </div>
        <div className='col-lg-3 col-md-6 col-12'>
            <div>
                <h4 className="fw-bold">About</h4>
                <div className="text-gray-500">
                <p>Who We Are</p>
                <p>Return Policies</p>
                </div>
            </div>
        </div>
        <div className='col-lg-3 col-md-6 col-12'>
            <div>
                <h4 className="fw-bold">Contact Us</h4>
                <div className="text-gray-500">
                <p>Join Us</p>
                </div>
            </div>
        </div>
        <div className='col-lg-3 col-md-6 col-12'>
            <div>
                <h4 className="fw-bold">Follow Us</h4>
                <ul className="d-flex ps-0">
                    <li>
                    <i className="fa-brands fa-2x text-gray-500 fa-facebook"></i>
                    </li>
                    <li className="mx-4">
                    <i className="fa-brands fa-2x text-gray-500 fa-instagram"></i>
                    </li>
                    <li>
                    <i className="fa-brands fa-2x text-gray-500 fa-whatsapp"></i>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
    <div className='col-12 text-center mt-5 mb-3'>
            <div>
                <p className="fw-bold text-xs">Copyright ©2023 All rights reserved | This template is made By Ziad Hesham</p>
                
            </div>
        </div>
  </footer>
  </>
}
