import React from 'react'
// import Checkout from '../components/checkout'
import Navbar from '../components/navCheckout'
import Hero from '../components/heroCheckout'
import Total from '../components/total'
import Footer from '../components/footerCheckout'


const checkout = () => {
  return (
    <main>
     <Navbar/>
     <Hero/>
     <Total/>
     <Footer/>
    </main>
  )
}

export default checkout