import React, { useState } from 'react';

const Total = () => {
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvvNumber, setCvvNumber] = useState('');
  const [houseAddress, setHouseAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card'); // Default to card payment
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    // Simulate placing order logic (validate inputs, send to backend, etc.)
    if (cardholderName && cardNumber && expirationDate && cvvNumber && houseAddress) {
      // In a real application, you would typically send this data to a server
      console.log('Order placed:', {
        cardholderName,
        cardNumber,
        expirationDate,
        cvvNumber,
        houseAddress,
        paymentMethod
      });
      setIsOrderPlaced(true);
    } else {
      alert('Please fill out all required fields.');
    }
  };

  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='p-4 sm:p-6 md:p-8'>
        <div className='flex justify-between items-center'>
          <h1 className='text-lg sm:text-xl'>Subtotal</h1>
          <hr className='flex-grow ml-4 sm:hidden' />
          <h1 className='text-lg sm:text-xl'>$1200</h1>
        </div>

        <div className='flex justify-between items-center mt-4'>
          <h1 className='text-lg sm:text-xl'>Delivery Fee</h1>
          <h1 className='text-lg sm:text-xl'>$200</h1>
        </div>

        <div className='flex justify-between items-center mt-4'>
          <h1 className='text-lg sm:text-xl'>Total</h1>
          <h1 className='text-lg sm:text-xl'>$1400</h1>
        </div>

        {!isOrderPlaced && (
          <div className='mt-8'>
            <h3 className='text-lg font-semibold mb-4'>Payment Method</h3>

            <div className='flex mb-4'>
              <button
                className={`w-[80px] py-2 rounded-md mr-4 ${paymentMethod === 'card' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setPaymentMethod('card')}
              >
                Card
              </button>
              <button
                className={`w-[80px] py-2 rounded-md ${paymentMethod === 'paypal' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setPaymentMethod('paypal')}
              >
                Paypal
              </button>
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700'>Cardholder's Name</label>
              <input
                type='text'
                value={cardholderName}
                onChange={(e) => setCardholderName(e.target.value)}
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700'>Card Number</label>
              <input
                type='text'
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
              />
            </div>

            <div className='flex mb-4'>
              <div className='w-1/2 mr-2'>
                <label className='block text-gray-700'>Expiration Date</label>
                <input
                  type='text'
                  value={expirationDate}
                  onChange={(e) => setExpirationDate(e.target.value)}
                  className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
                />
              </div>
              <div className='w-1/2 ml-2'>
                <label className='block text-gray-700'>CVV Number</label>
                <input
                  type='text'
                  value={cvvNumber}
                  onChange={(e) => setCvvNumber(e.target.value)}
                  className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
                />
              </div>
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700'>House Address</label>
              <input
                type='text'
                value={houseAddress}
                onChange={(e) => setHouseAddress(e.target.value)}
                className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
              />
            </div>

            <button
              className='w-full bg-orange-500 text-white py-2 rounded-md font-bold'
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        )}

        {isOrderPlaced && (
          <div className='mt-8'>
            <h3 className='text-lg font-semibold mb-4'>Order Placed Successfully!</h3>
            <p>Your order has been successfully placed. Thank you!</p>
          </div>
        )}
      </div>

      <hr className='mt-8' />
    </div>
  );
};

export default Total;
