import React, { useEffect, useState } from 'react'
import SliderCom from '../Component/SliderCom'
import imagesOne from '../Pic/img-1.png'
import imagesTwo from '../Pic/images-2.jpg'
import imagesThree from '../Pic/Img-3.jpg'
import data from '../Data/t-shirt.json'
import CartCom from '../Component/CartCom'

const Home = () => {


   const handeler =(id)=>{

       alert(id._id)

   }

 
  return (
    <div className='mx-5'>

    <SliderCom img={imagesOne} img2={imagesTwo} img3={imagesThree}/>
    <div className=' my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>

     {
      data.map((ele ,_id)=> {
        return<>
            <CartCom img={ele.picture} key={ ele._id}
            title={ele.name} description={ele.gender} handeler={handeler} id={ele}/>
        
        </>

      })
     }


    </div>

  
    </div>
  )
}

export default Home