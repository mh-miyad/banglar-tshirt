import React from 'react'

const OrderSidebar = ({price ,totalPrice}) => {
  return (
    <div className='container mx-auto'>
        
      <div className=" rounded shadow-md  p-4 border ">
   <h3 className="text-center font-bold p-3 text-xl md:text-4xl text-gray-600">      Order Summery </h3>

         <div className="space-y-5 text-justify">
         <div className="text-xl font-semibold">
          Price:{price}
         </div>
         <div className="text-xl font-semibold">
          Charge: 2.5 %
         </div>
         <div className="text-xl font-semibold">
          Tax: 2.5 %
         </div>
         <hr  className='w-full h-2 bg-red-400 rounded-xl'/>
         <div className="text-xl md:text-4xl font-semibold">
          Total: $ {totalPrice}
         </div>

         </div>
      </div>
    </div>
  )
}

export default OrderSidebar