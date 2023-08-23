import { useRouter } from 'next/router'
import ProtectedRoute from '../../component/ProtectedRoute'
import { useEffect, useRef } from 'react'
import $ from "jquery";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const Home = () =>{
  function correctNav() {
    $('.navwidth').css({"top":"5%","width":"75%"})
   }
const header = useRef()
  useEffect(() => {
    correctNav()
    function handleScroll(){
      if (header.current != null) {
        
      let pointOfLook = header.current.getBoundingClientRect()
      if (pointOfLook.y >= 0) {
       
        $('.navwidth').css({"top":"5%","width":"75%"})
      }
      else{
        
        $('.navwidth').css({"top":"0%","width":"100%"})
      }
      }
    }
    window.addEventListener('scroll',handleScroll)
  }, [])
  
  return  <>
{/* header */}
  <header className='container-fluid wallpaper overflow-hidden py-10 lg:py-20'>
    <div className='row align-items-center pt-10 md:pt-0'>
    <div className='col-6 d-flex flex-wrap '>
    <div className='lg:ps-40 '>
    <h1 ref={header} className='display-1 fw-bold'>NIKE New Collection!</h1>
    <h6> Buy the New Shoes From Sigma With Best Prices</h6>
    <button className='btn btn-color rounded-5 fw-bold'>Shop Collection</button>
    </div>
    </div>
    {/* a3ml carousel */}
    <div className='col-6 '>
<Swiper pagination={{clickable:true}}   
 autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}  modules={[Pagination,Autoplay]} className="mySwiper">
        <SwiperSlide><figure><img src="homeshoe.png" className='w-100' alt="Nike Shoes"  /></figure></SwiperSlide>
        <SwiperSlide><figure><img src="Nikeshoe2.png" className='w-100' alt="Nike Shoes"  /></figure></SwiperSlide>
        <SwiperSlide><figure><img src="Nikeshoe3.png" className='w-100' alt="Nike Shoes"  /></figure></SwiperSlide>
      </Swiper>

    </div>
    </div>
  </header>
  {/* Latest Products section*/}
  <section className='container my-5'>
    <div className='text-center my-3'>
      <h2 className='fw-bold'>Latest Products</h2>
    </div>
    <div className='row justify-center'>

      <div className="col-lg-3 sm:mx-5 col-md-3 col-sm-6 col-6 d-flex">
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
          <div className="col-lg-3 sm:mx-5 col-md-3 col-sm-6 col-6 d-flex">
            <div className="card  my-2 shadow-2-strong">
              <img src="./iphone14.jpg" className="card-img-top w-100 " />
              <div className="card-body  ">
                <div className=" flex-row">
                  <h5 className="mb-1 me-1">IPhone 14</h5>
                </div>
                <div className=" flex-row">
                  <h6 className="mb-1 me-1 text-gray-500">49,999 L.E</h6>
                </div>
                <p className="card-text">Cell Phones</p>
                
                <div className="card-footer bg-transparent d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                  
                  <button className="btn btn-color rounded-3 shadow-0 fw-bold me-1">Add To Cart</button>
                  
                </div>
                
              </div>
            </div>
          </div>
          <div className="col-lg-3 sm:mx-5 col-md-3 col-sm-6 col-6 d-flex">
            <div className="card  my-2 shadow-2-strong">
              <img src="./PS5.jpg" className="card-img-top w-100" />
              <div className="card-body  ">
                <div className=" flex-row">
                  <h5 className="mb-1 me-1">PS5</h5>
                </div>
                <div className=" flex-row">
                  <h6 className="mb-1 me-1 text-gray-500">26,000 L.E</h6>
                </div>
                <p className="card-text">Video Games</p>
                
                <div className="card-footer bg-transparent d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                  
                  <button className="btn btn-color rounded-3 shadow-0 fw-bold me-1">Add To Cart</button>
                  
                </div>
                
              </div>
            </div>
          </div>
          <div className="col-lg-3 sm:mx-5 col-md-3 col-sm-6 col-6 d-flex">
            <div className="card  my-2 shadow-2-strong">
              <img src="./sofa.jpg" className="card-img-top w-100 " />
              <div className="card-body  ">
                <div className=" flex-row">
                  <h5 className="mb-1 me-1">Sofa</h5>
                </div>
                <div className=" flex-row">
                  <h6 className="mb-1 me-1 text-gray-500">8,600 L.E</h6>
                </div>
                <p className="card-text">Furniture</p>
                
                <div className="card-footer bg-transparent d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                  
                  <button className="btn btn-color rounded-3 shadow-0 fw-bold me-1">Add To Cart</button>
                  
                </div>
                
              </div>
            </div>
          </div>
          <div className="col-lg-3 sm:mx-5 col-md-3 col-sm-6 col-6 d-flex">
            <div className="card  my-2 shadow-2-strong">
              <img src="./Samsung Refrigerator.jpg" className="card-img-top w-100 " />
              <div className="card-body  ">
                <div className=" flex-row">
                  <h5 className="mb-1 me-1">Samsung Refrigerator</h5>
                </div>
                <div className=" flex-row">
                  <h6 className="mb-1 me-1 text-gray-500">15,000 L.E</h6>
                </div>
                <p className="card-text">Electronics</p>
                
                <div className="card-footer bg-transparent d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                  
                  <button className="btn btn-color rounded-3 shadow-0 fw-bold me-1">Add To Cart</button>
                  
                </div>
                
              </div>
            </div>
          </div>
          <div className="col-lg-3 sm:mx-5 col-md-3 col-sm-6 col-6 d-flex">
            <div className="card  my-2 shadow-2-strong">
              <img src="./Nike.png" className="card-img-top w-100" />
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
  </section>
  {/* Offers section */}
  <section className='container-fluid my-40'>
<div className='row'>
<div className='col-md-6 col-12 offerimage'>

</div>
<div className='col-md-6 col-12 bg-gray-100'>
<div id="carouselExampleAutoplaying" class="carousel carousel-dark slide" data-bs-ride="carousel">
<h2 className='fw-bold text-center my-3'>Exclusive Hot Deal Ends Soon!</h2>
  <div class="carousel-inner">
    <div class="carousel-item active ">
    
    <div className='row justify-center'>
      <div className="col-lg-6 col-8">
      <div className="card mt-2 mb-5 shadow-2-strong">
              <img src="./nike-blazer.jpg" className="card-img-top w-100 " />
              <div className="card-body  ">
                <div className=" flex-row">
                  <h5 className="mb-1 me-1">Nike Blazer</h5>
                </div>
                <div className=" flex-row">
                  <h6 className="mb-1 me-1 text-gray-500">650 L.E <span className='text-danger ms-2'>-30%</span></h6>
                </div>
                <p className="card-text">Clothes</p>
                
                <div className="card-footer bg-transparent d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                  
                  <button className="btn btn-color rounded-3 shadow-0 me-1 fw-bold">Add to cart</button>
                  
                </div>
                
              </div>
            </div>
      </div>
    </div>
    </div>
    <div class="carousel-item">
    
    <div className='row justify-center'>
      <div className="col-lg-6 col-8">
      <div className="card mt-2 mb-5 shadow-2-strong">
              <img src="./SamTV.png" className="card-img-top w-100 " />
              <div className="card-body  ">
                <div className=" flex-row">
                  <h5 className="mb-1 me-1">Samsung AU7000-65 inch</h5>
                </div>
                <div className=" flex-row">
                  <h6 className="mb-1 me-1 text-gray-500">15,250 L.E <span className='text-danger ms-2'>-30%</span></h6>
                </div>
                <p className="card-text">Clothes</p>
                
                <div className="card-footer bg-transparent d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                  
                  <button className="btn btn-color rounded-3 shadow-0 me-1 fw-bold">Add to cart</button>
                  
                </div>
                
              </div>
            </div>
      </div>
    </div>
    </div>
    <div class="carousel-item">
    
    <div className='row justify-center'>
      <div className="col-lg-6 col-8">
      <div className="card mt-2 mb-5 shadow-2-strong">
              <img src="./dumbell.jpg" className="card-img-top w-100 " />
              <div className="card-body  ">
                <div className=" flex-row">
                  <h5 className="mb-1 me-1">Boflex SelectTech Dumbell 24Kg</h5>
                </div>
                <div className=" flex-row">
                  <h6 className="mb-1 me-1 text-gray-500">3,200 L.E   <span className='text-danger ms-2'>-30%</span></h6>
                </div>
                <p className="card-text">Clothes</p>
                
                <div className="card-footer bg-transparent d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                  
                  <button className="btn btn-color rounded-3 shadow-0 me-1 fw-bold">Add to cart</button>
                  
                </div>
                
              </div>
            </div>
      </div>
    </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  
</div>
</div>
  </section>

  </>
  
}
export default Home
