import React, { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [ascending, setAscending] = useState(true);
  const [search, setSearch] = useState("");
  const searchRef = useRef(null);
  useEffect(() => {
    fetch(
      `http://localhost:5000/services?search=${search}&sort=${
        ascending ? "ascending" : "descending"
      }`
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [ascending, search]);

  const handleSearch = () => {
    setSearch(searchRef.current.value);
    console.log(searchRef.current.value);
  };

  return (
    <div className="mt-20">
      <div className="text-center">
        {" "}
        <h2 className="text-3xl text-orange-500 font-bold mb-4">Services</h2>
        <h3 className="text-5xl font-bold mb-2">Our Service Area</h3>
        <p className="text-gray-600">
          Our service area includes the entire metro region, ensuring that all
          drivers have access to our expert car servicing and repairs
        </p>
        <div className="form-control mt-4 ">
          <div className="input-group">
            <input
              type="text"
              ref={searchRef}
              placeholder="Search…"
              className="input input-bordered"
            />
            <button onClick={handleSearch} className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-4 text-gray-700 font-semibold">
          {" "}
          Sort By <span>(price)</span> :{" "}
          <button
            onClick={() => setAscending(!ascending)}
            className="btn hover:bg-orange-500"
          >
            {ascending ? "High to Low" : "Low To High "}
          </button>
        </div>
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
