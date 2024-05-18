import React from "react";
const testingLibraryReact = require("@testing-library/react");
const render = testingLibraryReact.render;
const fireEvent = testingLibraryReact.fireEvent;
const waitFor = testingLibraryReact.waitFor;
import RootLayout from "../layout";
import navLinks from "@data/navLinks.json";
import "@testing-library/jest-dom";

describe("RootLayout", () => {
    it("renders Navbar and children", () => {
        const { getByText, getByTestId } = render(
          <RootLayout navLinks={navLinks}>
            <div>Child Component</div>
          </RootLayout>
        );
    
        const navbarElement = getByTestId("navbar");
        expect(navbarElement).toBeInTheDocument();
    
        const childComponentElement = getByText("Child Component");
        expect(childComponentElement).toBeInTheDocument();
    });

    it("toggles the active state when menu button is clicked", () => {
        const { getByTestId } = render(<RootLayout navLinks={navLinks} />);
        const menuButton = getByTestId("menu-button");
        expect(menuButton.classList.contains("active")).toBe(false);
        fireEvent.click(menuButton);
        expect(menuButton.classList.contains("active")).toBe(false);
    });
});
