import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { ThemeProvider } from "styled-components";

const TestTheme = {
  colors: {
    primary: "red",
  },
};

    describe("Header", () => {
    it("Should render header element and displays the current date and time", () => {
        render(
            <ThemeProvider theme={TestTheme}>
                <Header />
            </ThemeProvider>
        );

        const IsHeaderRender = screen.getByTestId("header-container")

        const currentDateElement = screen.getByTestId("current-date");
        const currentTimeElement = screen.getByTestId("current-time");

        const currentDateText = currentDateElement.textContent;
        const currentTimeText = currentTimeElement.textContent;

        expect(IsHeaderRender).toBeInTheDocument();
        expect(currentDateText).toMatch(/\d{1,2} de \w+ de \d{4}/);
        expect(currentTimeText).toMatch(/\d{1,2}:\d{2} UTC/);
    });
});