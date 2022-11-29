import React from 'react';
import './App.css';
import Not from './Not';

function App() {
  return (
    <div className="app">
      <Not ad="Bilgisayar" aciklama="Açıklama 1" tarih="1 Ocak"></Not>
      <Not ad="Telefon" aciklama="Açıklama 2" tarih="2 Ocak"></Not>
      <Not ad="Araba" aciklama="Açıklama 3"></Not>
    </div>
  );
}

export default App;
