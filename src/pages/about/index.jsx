import React from 'react'
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
  <div class="image-aboutus-banner mt-16">
   <div class="container">
    <div class="row">
        <div class="col-md-12">
         <h1 class="display-1">About Us</h1>
         <p class="image-aboutus-para">What do you want to know</p>
       </div>
    </div>
</div>
</div>
<section className='container my-5'>
    <div className='row justify-between align-items-center'>
        <div className='col-12 col-lg-5'>
            <div className='border border-start-0 border-end-0 py-2 '>
            <h2>Know About Us</h2>
            </div>
            <div>
                <p className='text-lg'>Welcome to our SIGMA! We are a leading online marketplace that aims to provide a seamless shopping experience for our valued customers. With a vast range of products and a user-friendly interface, we strive to make your online shopping journey enjoyable and convenient.</p>
<p className='text-lg'>Our dedicated team is committed to providing prompt assistance and resolving any queries or concerns you may have. From secure payment options to reliable shipping methods, we ensure a hassle-free experience from start to finish. In addition to our commitment to customer satisfaction, Our website is designed to be intuitive and easy to navigate, allowing you to find your desired products effortlessly.</p>
            <p className='text-lg'>Thank you for choosing our e-commerce platform. We look forward to serving you and providing you with an exceptional online shopping experience. Happy shopping!</p>
            </div>
        </div>
        <div className='col-12 col-lg-5'>
            <div>
            <img src="./undraw_team_spirit_re_yl1v.svg" alt="" />
            </div>
        </div>
    </div>
</section>
  </>
}
