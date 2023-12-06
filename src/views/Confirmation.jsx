import "./Confirmation.scss";
import { useLocation } from "react-router-dom";

import Top from "../components/Top/Top";
import Navigation from "../components/Navigation/Navigation";
import Input from "../components/Input/Input";

function Confirmation() {
  const { state } = useLocation();

  return (
    <section className="confirmation">
      <Navigation />
      <Top title="See you soon!" />
      {state ? (
        <form className="confirmation__details">
          <Input label="When" title="When" type="text" customClass="confirmation__input" defaultValue={state.confirmationDetails.when} disabled="disabled" />
          <Input label="Who" title="People" type="text" customClass="confirmation__input" defaultValue={state.confirmationDetails.people} disabled="disabled" />
          <Input label="Lanes" title="Lanes" type="text" customClass="confirmation__input" defaultValue={state.confirmationDetails.lanes} disabled="disabled" />
          <Input label="Booking number" title="BookingId" type="text" customClass="confirmation__input" defaultValue={state.confirmationDetails.id} disabled="disabled" />
          <article className="confirmation__price">
            <p>Total:</p>
            <p>{state.confirmationDetails.price} sek</p>
          </article>
          <button className="button confirmation__button">Sweet, let's go!</button>
        </form>
      ) : (
        <h2 className="confirmation__no-booking">Ingen bokning gjord!</h2>
      )}
    </section>
  );
}

export default Confirmation;
