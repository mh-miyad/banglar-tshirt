import React from 'react'
import OrderSumery from '../Component/OrderSumery'
import OrderSidebar from '../Component/OrderSidebar'

const OrderSummery = () => {
  return (
    <div className='  flex justify-around gap-10'>
      <div className=''>
      <OrderSumery color={'gray'} opacity={100} />

      </div>

      <div className=''>

      <OrderSidebar/>
      </div>


    </div>
  )
}

export default OrderSummery