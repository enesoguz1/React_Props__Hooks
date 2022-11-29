/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import "./App.css";

function Not( {ad,aciklama,tarih="5 Ocak"}  ) {
  return (
    <div className='not'>
      <h2>{ad}</h2>
      <p>{aciklama}</p>
      <hr/>
      <p>{tarih}</p>
    </div>
  )
}

export default Not;
