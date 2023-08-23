import React from 'react'

export default function index() {
  return (
    <div className='container'>
    <div className='my-3'>
    <h1 className='text-dark text-center'>Products</h1>
    </div>
    <div className='row '>
      <div className='col-12 overflow-x-auto'>
        <div>
        <table className="table table-striped">
  <thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">Name</th>
    <th scope="col">Image</th>
    <th scope="col">Price</th>
    <th scope="col">Category</th>
    <th scope="col">Options</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <th scope="row">1</th>
    <td >PS5</td>
    <td ><img src="./PS5.jpg" className='w-full md:w-1/4' alt="" /></td>
    <td >28,550</td>
    <td >Video Games</td>
    <td ><div className='d-flex'>
      <button className='btn btn-primary me-2'>
        Edit
      </button>
      <button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#deleteModal">
        Delete
      </button>
      </div></td>
  </tr>
  
  </tbody>
  </table>
        </div>
        <button className='btn btn-color w-full lg:w-32'>Add Product</button>
      </div>
      
    </div>
    <div className="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Delete</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        Are you sure you want to delete User Name
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger rounded-5" data-bs-dismiss="modal">Cancel</button>
        <button type="button" className="btn btn-success rounded-5">Yes</button>
      </div>
    </div>
  </div>
</div>
  </div>
  )
}
