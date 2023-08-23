import axios from 'axios';
import { useEffect} from 'react'
import $ from "jquery";


export default function index() {
 function correctNav() {
  $('.navwidth').css({"top":"0%","width":"100%"})
 }
  useEffect(() => {
    correctNav()
    
  }, [])
  
  return <>

<section className="pt-24 wallpaper2">
  <div className="container ">
    <div className="row justify-content-between my-5">
      {/* Sidebar */}
      <div className="col-lg-3 shadow-lg bg-white h-50 rounded-3">
      <div>
        <h5 className='text-center fw-bold my-3'>Categories</h5>
        <ul className='ps-3 border-bottom pb-3'>
          <li>All</li>
          <li>Clothes</li>
          <li>Gaming</li>
          <li>Electronics</li>
          <li>Cell Phones</li>
          <li>Furniture</li>
          <li>Computers</li>
          <li>Sports & Fitness</li> 
        </ul>
        <div>
        <h6 className='fw-bold ps-0'>Price</h6>
        <div className="p-3">
        <p>From :</p>
          <input type="number" className='form-control'/>
          <p>to :</p>
          <input type="number" className='form-control'/>
        </div>
        </div>
        <div className="text-center">
        <button className='btn btn-color rounded-3 my-3 fw-bold'>Apply</button>
        </div>
        </div>
        
      </div>
      {/* Content */}
      <div className="col-lg-8 bg-white shadow-lg p-3 rounded-3">
        <header className="d-flex justify-content-between align-items-center border-bottom mb-4 pb-3">
          <div>
          <h2>All Products</h2>
          <strong className="d-block py-2">5 Items found </strong>
          </div>
          <div class="dropdown">
  <a class="btn btn-color dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Sort
  </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">High To Low</a></li>
    <li><a class="dropdown-item" href="#">Low To High</a></li>
  </ul>
</div>
        </header>

        <div className="row align-items-end ">
        
        <div className="col-lg-5  sm:mx-5 col-md-3 col-sm-6 col-12 d-flex">
            <div className="card  my-2 shadow-2-strong">
              <img src="./T-shirt.jpg" className="card-img-top w-100 " />
              <div className="card-body  ">
                <div className=" flex-row">
                  <h5 className="mb-1 me-1">RRR T-Shirt</h5>
                </div>
                <div className=" flex-row">
                  <h6 className="mb-1 me-1 text-gray-500">250 L.E</h6>
                </div>
                <p className="card-text">Clothes</p>
                
                <div className="card-footer bg-transparent d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                  
                  <button className="btn btn-color rounded-3 fw-bold me-1">Add To Cart</button>
                  
                </div>
                
              </div>
            </div>
          </div>
          <div className="col-lg-5  sm:mx-5 col-md-3 col-sm-6 col-12 d-flex">
            <div className="card  my-2 shadow-2-strong">
              <img src="./T-shirt.jpg" className="card-img-top w-100 " />
              <div className="card-body  ">
                <div className=" flex-row">
                  <h5 className="mb-1 me-1">RRR T-Shirt</h5>
                </div>
                <div className=" flex-row">
                  <h6 className="mb-1 me-1 text-gray-500">250 L.E</h6>
                </div>
                <p className="card-text">Clothes</p>
                
                <div className="card-footer bg-transparent d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                  
                  <button className="btn btn-color rounded-3 shadow-0 fw-bold me-1">Add To Cart</button>
                  
                </div>
                
              </div>
            </div>
          </div>
          <div className="col-lg-5  sm:mx-5 col-md-3 col-sm-6 col-12 d-flex">
            <div className="card  my-2 shadow-2-strong">
              <img src="./T-shirt.jpg" className="card-img-top w-100 " />
              <div className="card-body  ">
                <div className=" flex-row">
                  <h5 className="mb-1 me-1">RRR T-Shirt</h5>
                </div>
                <div className=" flex-row">
                  <h6 className="mb-1 me-1 text-gray-500">250 L.E</h6>
                </div>
                <p className="card-text">Clothes</p>
                
                <div className="card-footer bg-transparent d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                  
                  <button className="btn btn-color rounded-3 shadow-0 fw-bold me-1">Add To Cart</button>
                  
                </div>
                
              </div>
            </div>
          </div>
          <div className="col-lg-5  sm:mx-5 col-md-3 col-sm-6 col-12 d-flex">
            <div className="card  my-2 shadow-2-strong">
              <img src="./T-shirt.jpg" className="card-img-top w-100 " />
              <div className="card-body  ">
                <div className=" flex-row">
                  <h5 className="mb-1 me-1">RRR T-Shirt</h5>
                </div>
                <div className=" flex-row">
                  <h6 className="mb-1 me-1 text-gray-500">250 L.E</h6>
                </div>
                <p className="card-text">Clothes</p>
                
                <div className="card-footer bg-transparent d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                  
                  <button className="btn btn-color rounded-3 shadow-0 fw-bold me-1">Add To Cart</button>
                  
                </div>
                
              </div>
            </div>
          </div>
          <div className="col-lg-5  sm:mx-5 col-md-3 col-sm-6 col-12 d-flex">
            <div className="card  my-2 shadow-2-strong">
              <img src="./T-shirt.jpg" className="card-img-top w-100 " />
              <div className="card-body  ">
                <div className=" flex-row">
                  <h5 className="mb-1 me-1">RRR T-Shirt</h5>
                </div>
                <div className=" flex-row">
                  <h6 className="mb-1 me-1 text-gray-500">250 L.E</h6>
                </div>
                <p className="card-text">Clothes</p>
                
                <div className="card-footer bg-transparent d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                  
                  <button className="btn btn-color rounded-3 shadow-0 fw-bold me-1">Add To Cart</button>
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <hr />

        
      </div>
    </div>
  </div>            
</section>
<nav aria-label="Page navigation" className='d-flex justify-content-center'>
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link text-black" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo; Previous</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link text-black" href="#">1</a></li>
    <li class="page-item"><a class="page-link text-black" href="#">2</a></li>
    <li class="page-item"><a class="page-link text-black" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link text-black" href="#" aria-label="Next">
        <span aria-hidden="true">Next &raquo;</span>
      </a>
    </li>
  </ul>
</nav>


  </>
}
