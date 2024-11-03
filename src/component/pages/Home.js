import React from 'react';
 import Header from "../header/header";
import ShowNotes from "../showNotes/showNotes";
import Navbar from "../navbar/Navbar";
import Footer from '../footer/Footer';
import Upload from '../instructions/Upload';

export default function Home() {
  return (
    <div>
       <Navbar/>
    <div  className="">
     <Header />
     <ShowNotes />
     <Upload />
<Footer/>
    </div>
    </div>
  )
}
