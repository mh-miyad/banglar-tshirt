import { Button, Card } from 'flowbite-react'
import React from 'react'

const CartCom = ({img,title,description}) => {
  return (
    <div>




<div className="max-w-xs">
  <Card imgSrc={img} className=''>
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    {title}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
     {description}
    </p>
    <div className='flex justify-between'>
        <Button color={'failure'}> Add Cart</Button>
        <Button color={'success'}> Buy Now</Button>
    </div>
  </Card>
</div>











    </div>
  )
}

export default CartCom