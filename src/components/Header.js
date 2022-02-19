import React from "react";
import image from "../logo-book/book-2022464_640.png"

function Header() {
  return (
    <div id="booksharer-header">
      <img src={image} width="200" height="200" alt="" />
      <h1 className= "text-center">SHARE-A-BOOK</h1>
    </div>
  );
}

export default Header;