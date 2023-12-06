import "./BookingInfo.scss";

import Input from "../Input/Input";

function BookingInfo({ updateBookingDetails }) {
  return (
    <section className="booking-info">
      <header>
        <h2 className="booking-info__heading">When, WHAT & Who</h2>
      </header>
      <form className="booking-info__details">
        <section className="booking-info__when">
          <Input label="Date" type="date" customClass="booking-info__date" name="when" title="When" handleChange={updateBookingDetails} />
          <Input label="Time" type="text" name="time" title="Time" handleChange={updateBookingDetails} />
        </section>
        <Input label="Number of awesome bowlers" type="number" customClass="booking-info__who" name="people" title="People" handleChange={updateBookingDetails} />
        <Input label="Number of lanes" type="number" customClass="booking-info__lanes" name="lanes" title="Lanes" handleChange={updateBookingDetails} />
      </form>
    </section>
  );
}

export default BookingInfo;
