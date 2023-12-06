import BookingInfo from "./BookingInfo";
import { render, screen, fireEvent } from "@testing-library/react";
import { beforeEach } from "vitest";

describe("BookingInfo", () => {
  beforeEach(() => {
    render(<BookingInfo />);
  });

  // Det finns en kalender användaren kan bläddra igenom
  it("should render a calendar", () => {
    const when = screen.getByTitle("When");
    expect(when).toBeInTheDocument();
  });

  // Användaren ska kunna välja ett datum från kalendern
  it("should update date selection from calendar", () => {
    const when = screen.getByTitle("When");

    fireEvent.change(when, {
      target: { value: "2024-03-31" },
    });

    expect(when.value).toBe("2024-03-31");
  });

  // Användaren ska kunna skriva in en tid i ett input fält
  it("should render input for time", () => {
    const time = screen.getByTitle("Time");
    expect(time).toBeInTheDocument();
  });

  it("should update date input", () => {
    const time = screen.getByTitle("Time");

    fireEvent.change(time, {
      target: { value: "19:00" },
    });

    expect(time.value).toBe("19:00");
  });

  // Användaren ska kunna ange 1 spelare eller fler i ett input fält
  it("should render input for people", () => {
    const people = screen.getByTitle("People");
    expect(people).toBeInTheDocument();
  });

  it("should update number of people", () => {
    const people = screen.getByTitle("People");

    fireEvent.change(people, {
      target: { value: "4" },
    });

    expect(people.value).toBe("4");
  });

  // Användaren ska kunna ange 1 eller flera baner i ett input fält
  it("should render input for time", () => {
    const time = screen.getByTitle("Lanes");
    expect(time).toBeInTheDocument();
  });

  it("should update number of lanes", () => {
    const lanes = screen.getByTitle("Lanes");

    fireEvent.change(lanes, {
      target: { value: "1" },
    });

    expect(lanes.value).toBe("1");
  });
});
