const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, service, customerName, price, date, email, img, status } =
    booking;

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn bt-sm btn-circle"
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {img && <img src={img} alt="service image" />}
            </div>
          </div>
          <div>
            <div className="font-bold">{service}</div>
          </div>
        </div>
      </td>
      <td>{date}</td>
      <td>{"$" + price}</td>
      <td>{email}</td>
      <th>
        {status === "confirm" ? (
          <span className="font-bold text-orange-600">Confirmed</span>
        ) : (
          <button
            onClick={() => handleBookingConfirm(_id)}
            className="btn btn-ghost btn-xs"
          >
            Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingRow;
