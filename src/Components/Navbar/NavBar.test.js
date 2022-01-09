import NavBarComponent from "./Navbar";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("Navbar", () => {
  it("the navbar appears", async () => {
    act(() => {
      render(<NavBarComponent Home={false} />);
    });
    expect(await screen.findByTestId(/navbar/i)).toBeVisible();
  });
});
