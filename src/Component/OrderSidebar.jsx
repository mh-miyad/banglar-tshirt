import React from 'react'
import { getFromLocal } from '../Utilities/getData'

const OrderSidebar = () => {
const items  =getFromLocal();
let price  = 0;
let quantity = 0;
for (const item  of items) {
  price = price + item.price;
  quantity = quantity + item.quantity;
  
}
let totalPrice = (price + ((price*0.025) + (price*0.05)))* quantity ;

  return (
    <div className='container mx-auto'>
        
      <div className=" rounded shadow-md  p-4 border ">
   <h3 className="text-center font-bold p-3 text-xl md:text-4xl text-gray-600">      Order Summery </h3>

         <div className="space-y-5 text-justify">
         <div className="text-xl font-semibold">
          Price: $ {price}
         </div>
         <div className="text-xl font-semibold">
          Charge: 2.5 %
         </div>
         <div className="text-xl font-semibold">
          Tax: 5 %
         </div>
         <hr  className='w-full h-2 bg-red-400 rounded-xl'/>
         <div className="text-xl md:text-4xl font-semibold">
          Total: $ {(totalPrice).toFixed(2)}
         </div>

         </div>
      </div>
    </div>
  )
}

export default OrderSidebar