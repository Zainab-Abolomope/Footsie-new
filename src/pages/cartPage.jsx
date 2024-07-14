import React from 'react'
import Navbar from '../components/navCheckout'
import Footer from '../components/footerCheckout'

import CartAdd from '../components/cartAdd'
const cartPage = () => {
  return (
    <div>
        <Navbar />


        <CartAdd />
        <Footer />
    </div>
  )
}

export default cartPage