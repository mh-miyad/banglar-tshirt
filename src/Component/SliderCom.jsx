import { Carousel } from 'flowbite-react'
import React from 'react'

const SliderCom = ({img,img2,img3}) => {
  return (
    <>

    <div className='container mx-auto my-5 shadow-2xl shadow-yellow-500/30'>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
  <Carousel slideInterval={6000}>
    <img
      src={img}
      alt=""
      className='h-full'
   
    />
    <img
      src={img2}
      alt="..."
      className='h-full'
    />
    <img
      src={img3}
      alt="..."
      className='h-full'
    />
   
  </Carousel>
</div>


<div className='my-5'>




</div>
    </div>
    </>
  )
}

export default SliderCom