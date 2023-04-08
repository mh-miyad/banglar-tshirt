import React from 'react'
import OrderSumery from '../Component/OrderSumery'
import OrderSidebar from '../Component/OrderSidebar'
import { getFromLocal } from '../Utilities/getData'

const OrderSummery = () => {


  const items  = getFromLocal();
   


 


  return (
    <div className='  flex justify-around gap-10'>
      <div className=' space-y-8'>
     {
      items.map((item)=>  <OrderSumery quantity={item.quantity} img={item.img} key={item.id} title={item.name}/>)
     }

      </div>

      <div className=''>

      <OrderSidebar/>
      </div>


    </div>
  )
}

export default OrderSummery