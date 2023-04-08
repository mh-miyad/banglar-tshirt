import React from "react";
import { HiOutlineTrash} from 'react-icons/hi';

const OrderSumery = ({quantity ,title ,color ,opacity }) => {
  return (
    <div className={`bg-${color}-${opacity}`}>
      <div className="  rounded-lg px-5">
        <div className="flex  items-center justify-between ">
          <img
            src="https://media.istockphoto.com/id/465485445/photo/red-t-shirt-clipping-path.jpg?s=612x612&w=0&k=20&c=SfSPtHeslymJs8KbopzzDWHZzYIAdMMnfon0JRkwfVw="
            alt=""
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
