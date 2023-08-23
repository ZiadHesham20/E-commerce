import React, { useEffect } from 'react'
import $ from "jquery";

export default function index() {

  function correctNav() {
    $('.navwidth').css({"top":"0%","width":"100%"})
   }
    useEffect(() => {
      correctNav()
      
    }, [])

  return <>
  <div className="image-aboutus-banner2 mt-16">
   <div className="container">
    <div className="row">
        <div className="col-md-12">
         <h1 className="display-1">Contact Us</h1>
         <p className="image-aboutus-para">Want to get in touch? We'd love to hear from you. Here's how you can reach us...</p>
       </div>
    </div>
</div>
</div>
<section className='container my-5 py-5'>
<div className='row justify-between gy-5'>
<div className='col-12 col-md-5 bg-slate-50  h-96 shadow-md rounded-3 d-flex flex-wrap align-items-center justify-center'>
    <div className='text-center'><i className="fa-solid fa-3x fa-phone"></i></div>
<div className='text-center'>
    <h4>Talk to Sales</h4>
    <p>Interested in SIGMA’s products? Just pick up the phone to chat with a member of our sales team.</p>
    <h6>+0112 655 3297</h6>
</div>
</div>
<div className='col-12 col-md-5 shadow-md bg-slate-50 rounded-3 h-96  d-flex flex-wrap align-items-center justify-center'>
    <div className='text-center'><i className="fa-solid fa-3x my-3 fa-comments"></i></div>
<div className='text-center'>
    <h4>Contact Customer Support</h4>
    <p>Sometimes you need a little help from your friends. Or a SIGMA support rep. Don’t worry… we’re here for you.</p>
    <div className="input-group mb-3">
  <input type="text" className="form-control shadow-sm" placeholder="Send a message" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button className="btn btn-color" type="button" id="button-addon2"><i className="fa-regular fa-paper-plane"></i></button>
</div>
</div>
</div>
<div className='col-12'>
<div className='text-center my-5'>
<h2>Connect with one of our global offices</h2>
<div className='my-5'>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17305.941316565877!2d-119.7808420567026!3d36.80094689224011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809467e141d7dfcd%3A0xa36eb58c0a3d346!2sEmbarc%20Fresno%20Cannabis%20Dispensary!5e0!3m2!1sen!2seg!4v1692025559949!5m2!1sen!2seg" className='w-100 rounded-3' height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
</div>
</div>
</div>
</section>
  </>
}
