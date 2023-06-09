import { Button, Card } from 'flowbite-react'
import React from 'react'

const CartCom = ({img,title,description ,handeler,id}) => {





  return (
    <div>




<div className="max-w-xs">
  <Card>
    <img src={img} alt="" className='w-10/12 object-cover h-full ' />
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    {title}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400"> $
     {description}
    </p>
    <div className='flex justify-between'>
        <Button color={'failure'} onClick={()=>handeler(id)}> Add Cart</Button>
        <Button color={'success'}> Buy Now</Button>
    </div>
  </Card>
</div>











    </div>
  )
}

export default CartCom