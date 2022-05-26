import React from 'react'
import './Wishlist.scss'
import { Link } from 'react-router-dom'
import { saveBooks } from '../BooksInfo/BooksInfo'

export default function Wishlist() {

  return (

    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasRightLabel">Saved books</h5>
        <button type="button" className="btn-close close-button" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body">
        {saveBooks.map(item =>{
          return (
            <div className="mb-3">
              <img className="save-img" src={item.bookImg} alt="bookImg" width={150} height={100} />
              <h1 className="save-title mt-3">{item.bookName}</h1>
              <div className="d-flex">
                <p className="text-white d-flex align-items-center me-4">
                  <i className="bx me-2 fs-5 bxs-star" />{item.bookRating}
                  </p>
                <p className="save-price">Narxi: <span className="text-white">{item.bookPrice}</span></p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
