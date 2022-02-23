import React from "react";
import image from "../logo-book/book-2022464_640.png"

function Header() {
  return (
    <div className="header">    
      <div className="header-inner">
        <img src={image} width="200" height="200" alt="" />
        <div className= "header-text">
          <h1>SHARE-A-BOOK</h1>
          <p>Give a book or take one...</p>
        </div>
      </div>
      
    </div>
  );
}

export default Header;