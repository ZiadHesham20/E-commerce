import React, { useEffect } from 'react';
import $ from "jquery";
import Link from 'next/link'

export default function index() {

    function correctNav() {
        $('.navwidth').css({"top":"0%","width":"100%"})
       }
        useEffect(() => {
          correctNav()
          
        }, [])

  return <>
  <section className="container h-100 h-custom p-5">  
  <div className="container h-100 py-5">
    <Link href="./shop" className='text-decoration-none text-black'><h3><i className="fa-regular text-yellow-400 fa-circle-left"></i> Shop</h3></Link>
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card shopping-cart rounded-3">
          <div className="card-body text-black">

            <div className="row">
              <div className="col-lg-6 px-md-5  px-2 py-4">

                <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Your products</h3>

                <div className="d-flex align-items-center mb-5">
                  <div className="flex-shrink-0">
                    <img src="./T-shirt.jpg" className="img-fluid w-36"  alt="Generic placeholder image"/>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <a href="#!" className="float-end text-black"><i className="fas fa-times"></i></a>
                    <h5>Samsung Galaxy M11 64GB</h5>
                    
                    <div className="d-flex align-items-center">
                      <p className="fw-bold mb-0 me-5 pe-3 text-gray-500">799$</p>
                      
                    </div>
                  </div>
                </div>
                
                <hr className="mb-4 h-2 btn-color text-transparent rounded-1 opacity-100" />

                <div className="d-flex justify-content-between p-2 mb-2 bg-warning-subtle rounded-1">
                  <h5 className="fw-bold mb-0">Total:</h5>
                  <h5 className="fw-bold mb-0">2261$</h5>
                </div>

              </div>
              
              <div className="col-lg-6 px-md-5  px-3 py-4">

                <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Payment</h3>

                <form className="mb-5">

                  <div className="form-outline mb-5">
                  <label className="form-label" for="typeText">Card Number</label>
                    <input type="text" id="typeText" className="form-control shadow-sm focsinput  form-control-lg" siez="17" placeholder="**** **** **** ****" minlength="19" maxlength="19" />
                  </div>

                  <div className="form-outline mb-5">
                  <label className="form-label" for="typeName">Name on card</label>
                    <input type="text" id="typeName" className="form-control shadow-sm focsinput form-control-lg" placeholder='Name' siez="17"/>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-5">
                      <div className="form-outline">
                      <label className="form-label" for="typeExp">Expiration</label>
                        <input type="date" id="typeExp" className="form-control shadow-sm focsinput form-control-lg" size="7" minlength="7" maxlength="7" />
                      </div>
                    </div>
                    <div className="col-md-6 mb-5">
                      <div className="form-outline">
                      <label className="form-label" for="typeText">Cvv</label>
                        <input type="password" id="typeText" placeholder='Code' className="form-control shadow-sm focsinput form-control-lg" size="1" minlength="3" maxlength="3" />
                      </div>
                    </div>
                  </div>

                  <p className="mb-5 fw-bold"><i class="fa-solid fa-circle-info"></i> Shipping takes from 2-4 days</p>

                  <button type="button" className="btn btn-color btn-block btn-lg w-100">Buy now</button>

                  

                </form>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </>
}
