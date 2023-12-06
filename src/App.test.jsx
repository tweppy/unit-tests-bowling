import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import Booking from "./views/Booking";
import Confirmation from "./views/Confirmation";

describe("App", () => {
  it("should display bookingform inputs", async () => {
    render(<App />);

    expect(screen.getByTitle("When")).toBeInTheDocument();
    expect(screen.getByTitle("Time")).toBeInTheDocument();
    expect(screen.getByTitle("People")).toBeInTheDocument();
    expect(screen.getByTitle("Lanes")).toBeInTheDocument();
  });
});

describe("Navigation Flow", () => {
  beforeEach(() => {
    render(<App />);
  });

  // Det ska finnas en synlig meny knapp i hörnet
  it("should have a menu button", () => {
    const menuButton = screen.getByAltText(/navicon/i);
    expect(menuButton).toBeInTheDocument();
  });

  // Användaren ska kunna klicka på meny knappen och se de två länkarna
  it("should display two links if the menu is clicked and open", async () => {
    const menuButton = screen.getByAltText(/navicon/i);
    await userEvent.click(menuButton);
    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(2);
  });
});

// När användaren klickar på en länk ska de navigeras till rätt sida
describe("navigation", () => {
  it("should navigate to the correct link when clicked", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Booking />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </MemoryRouter>
    );

    const menuButton = screen.getByAltText(/navicon/i);
    await userEvent.click(menuButton);

    const links = screen.getAllByRole("link");
    const bookingLink = links[0];
    const confirmationLink = links[1];

    await userEvent.click(confirmationLink);
    expect(screen.getByText("See you soon!")).toBeInTheDocument();

    await userEvent.click(bookingLink);
    expect(screen.getByText("Booking")).toBeInTheDocument();
  });
});
