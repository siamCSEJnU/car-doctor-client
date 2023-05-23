import React, { useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const navigate = useNavigate();

  const url = `http://localhost:5000/bookings?email=${user.email}`;
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("car-access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setBookings(data);
        } else {
          navigate("/");
        }
      });
  }, [url, navigate]);
  const handleDelete = (id) => {
    // const proceed = confirm("Are you sure want to delete this?");
    Swal.fire({
      icon: "errors",
      confirmButtonText: "Cool",
      title: "Are you sure want to delete this??",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const reamaining = bookings.filter(
                (booking) => booking._id !== id
              );
              setBookings(reamaining);
            }
          });
      }
    });
  };

  const handleBookingConfirm = (id) => {
    Swal.fire({
      icon: "errors",
      confirmButtonText: "Cool",
      title: "Are you sure want to confirm this??",
      // text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, confirm it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ status: "confirm" }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              const reamaining = bookings.filter(
                (booking) => booking._id !== id
              );
              const updated = bookings.find((booking) => booking._id === id);
              updated.status = "confirm";
              const newBookings = [updated, ...reamaining];
              setBookings(newBookings);
            }
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-center text-gray-600 text-3xl font-semibold mb-10">
        Your Bookings : {bookings.length}
      </h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Service</th>
              <th>Date of Booking</th>
              <th>Price</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
