import { beforeEach, expect } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Confirmation from "./Confirmation";
import Booking from "./Booking";

describe("Booking flow", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Booking />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </MemoryRouter>
    );
  });

  // Det ska finnas en bokningsknapp
  it("should have a booking button", () => {
    const button = screen.getByRole("button", { name: "strIIIIIike!" });
    expect(button).toBeInTheDocument();
  });

  // När användaren klickar på bokningsknappen med rätt ifylld info ska de navigeras vidare till bekräftelsesidan där pris och bokningsnummer genereras
  it("should redirect after successfully booking", async () => {
    await userEvent.type(screen.getByTitle("When"), "2024-03-05");
    await userEvent.type(screen.getByTitle("Time"), "14:00");
    await userEvent.type(screen.getByTitle("People"), "2");
    await userEvent.type(screen.getByTitle("Lanes"), "1");

    const addShoe = screen.getByRole("button", { name: "+" });
    await userEvent.click(addShoe);
    await userEvent.click(addShoe);
    const sizes = screen.getAllByTitle("Size");
    for (const size of sizes) {
      await userEvent.type(size, "38");
    }

    const button = screen.getByRole("button", { name: "strIIIIIike!" });
    expect(button).toBeInTheDocument();

    await userEvent.click(button);

    const bookingId = screen.getByTitle("BookingId");
    bookingId.value = "STR5681YDDE";

    const totalCost = 2 * 120 + 1 * 100 + " sek";
    const price = screen.getByText(/sek/i);
    price.value = totalCost;

    expect(bookingId.value).toBe("STR5681YDDE");
    expect(price.value).toBe(totalCost);
    expect(screen.getByText("See you soon!")).toBeInTheDocument();
  });
});
