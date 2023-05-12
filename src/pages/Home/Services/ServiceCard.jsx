import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { title, img, price } = service;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-gray-700">{title}</h2>
        <div className="flex text-red-600">
          <p className=" flex-grow">Price : ${price}</p>
          <div>
            <FaArrowRight></FaArrowRight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
