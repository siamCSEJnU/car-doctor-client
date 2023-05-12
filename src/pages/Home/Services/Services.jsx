import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-4">
      <div className="text-center">
        {" "}
        <h2 className="text-3xl text-orange-500 font-bold">Services</h2>
        <h3 className="text-5xl font-bold">Our Service Area</h3>
        <p className="text-gray-600">
          Our service area includes the entire metro region, ensuring that all
          drivers have access to our expert car servicing and repairs
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
