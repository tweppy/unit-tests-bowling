import Shoes from "./Shoes";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

const mockUpdateSize = vi.fn();
const mockAddShoe = vi.fn();
const mockRemoveShoe = vi.fn();

describe("Shoes", () => {
  // Det ska finnas en knapp för att lägga till en ny skostorlek för en spelare
  it("should render add shoe size button", () => {
    const mockShoes = [];

    render(<Shoes updateSize={mockUpdateSize} addShoe={mockAddShoe} removeShoe={mockRemoveShoe} shoes={mockShoes} />);

    const addShoesButton = screen.getByRole("button", { name: "+" });
    expect(addShoesButton).toBeInTheDocument();
  });

  // När knappen klickas, ska ett nytt input fält för skostorlek renderas tillsammans med en radera knapp
  it("should add an input field and a remove button for shoe size", () => {
    const mockShoes = [];

    const { rerender } = render(<Shoes updateSize={mockUpdateSize} addShoe={mockAddShoe} removeShoe={mockRemoveShoe} shoes={mockShoes} />);

    const addShoesButton = screen.getByRole("button", { name: "+" });
    fireEvent.click(addShoesButton);

    const id = (mockShoes.length + 1).toString();
    mockShoes.push({ id: id, size: "" });

    rerender(<Shoes updateSize={mockUpdateSize} addShoe={mockAddShoe} removeShoe={mockRemoveShoe} shoes={mockShoes} />);

    const sizeInput = screen.getByRole("textbox");
    const removeShoesButton = screen.getByRole("button", { name: "-" });

    expect(mockAddShoe).toHaveBeenCalledTimes(1);
    expect(sizeInput).toBeInTheDocument();
    expect(removeShoesButton).toBeInTheDocument();
  });

  // Användaren ska kunna skriva in och uppdatera en skostorlek i ett input fält
  it("should update shoe size", () => {
    const mockShoes = [{ id: "1", size: "38" }];

    render(<Shoes updateSize={mockUpdateSize} addShoe={mockAddShoe} removeShoe={mockRemoveShoe} shoes={mockShoes} />);

    const size = screen.getByRole("textbox");

    fireEvent.change(size, {
      target: { value: "39" },
    });

    expect(mockUpdateSize).toHaveBeenCalledTimes(1);
    expect(size).toHaveValue("39");
  });

  // Användaren ska kunna klicka på en knapp för att ta bort en skostorlek från bokningen
  it("should remove shoe size", () => {
    let mockShoes = [{ id: "1", size: "38" }];

    const { rerender } = render(<Shoes updateSize={mockUpdateSize} addShoe={mockAddShoe} removeShoe={mockRemoveShoe} shoes={mockShoes} />);

    const size = screen.getByRole("textbox");
    const removeShoesButton = screen.getByRole("button", { name: "-" });

    fireEvent.click(removeShoesButton);

    mockShoes = mockShoes.filter((shoe) => shoe.id !== "1");

    rerender(<Shoes updateSize={mockUpdateSize} addShoe={mockAddShoe} removeShoe={mockRemoveShoe} shoes={mockShoes} />);

    expect(mockRemoveShoe).toHaveBeenCalledTimes(1);
    expect(size).not.toBeInTheDocument();
  });
});
