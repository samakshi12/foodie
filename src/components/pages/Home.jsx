import React from 'react'
import Navbar from '../Navbar'
import Content from '../Content'
import Footer from '../Footer'
import Carousel from '../Carousel'

export default function Home() {
  return (
    <div>
        <div><Navbar/></div>
        <div><Carousel/></div>
        <div className='mt-3'><Content/></div>
        <div><Footer/></div>
    </div>
    
  )
}
