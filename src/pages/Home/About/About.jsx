import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          {" "}
          <img src={person} className="w-11/12 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-3/5 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 space-y-5 p-4">
          <h3 className="text-3xl text-orange-500 font-bold">About Us</h3>
          <h1 className="text-5xl font-bold">
            We are qualified <br /> & of experience <br /> in this field
          </h1>
          <p className="pt-4 text-gray-600">
            At Car-doctor Services, we're passionate about cars and committed to
            providing the best possible care for your vehicle. With over few
            years of experience in the industry, our team of expert technicians
            has the skills and knowledge to keep your car running smoothly and
            safely.
          </p>
          <p className="text-gray-600">
            We pride ourselves on delivering excellent customer service and
            building long-lasting relationships with our clients. Trust us to
            take care of all your car servicing needs
          </p>
          <button className="bg-orange-500 text-white btn">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
