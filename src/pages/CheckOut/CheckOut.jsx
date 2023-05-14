import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id, img, price } = service;
  const { user } = useContext(AuthContext);

  const handleBookService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const message = form.message.value;
    const email = form.email.value;
    const phoneNumber = form.phone.value;
    const booking = {
      customerName: name,
      date,
      message,
      phoneNumber,
      email,
      img,
      price: price,
      service_id: _id,
      service: title,
    };
    console.log(booking);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Order Confirmed Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <h3 className="text-center text-3xl font-semibold text-gray-600 ">
        Booked service {title}
      </h3>
      <form onSubmit={handleBookService}>
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <input
                type="text"
                placeholder="Your Name"
                defaultValue={user?.displayName}
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="date"
                name="date"
                placeholder="Date"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                name="phone"
                placeholder="Your Phone"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                placeholder="Your email"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <textarea
              className="textarea "
              name="message"
              id=""
              cols="30"
              rows="8"
              placeholder="Your message"
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <input
              type="submit"
              value="Order Confirm"
              className="btn bg-orange-500 text-white"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
