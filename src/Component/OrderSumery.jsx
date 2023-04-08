import React from "react";
import { HiOutlineTrash} from 'react-icons/hi';

const OrderSumery = ({quantity ,title ,img}) => {


  
  return (
    <div>
      <div className="  rounded-lg px-5">
        <div className="flex  items-center justify-between ">
          <img
            src= {img}
            alt={title}
            className="w-20 h-20 object-contain  rounded-xl"
          />
          <div className="">
            <div>
            {title}</div> 
            Quantity:{quantity}
          </div>
          <button className="p-4" onClick={()=> alert(' Click Korso ')}>
            <HiOutlineTrash className="text-2xl text-red-500 "/>
          </button>
        </div>
        <div>
        </div>
      </div>

    </div>
  );
};

export default OrderSumery;
