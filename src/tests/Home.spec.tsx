import React from "react";
import {render, screen} from "@testing-library/react";
import Home from '../components/Home';
import { ThemeProvider } from "styled-components";
import { DollarExchangeRateProvider } from '../contexts/DollarExchangeRate';

const TestTheme = {
    colors: {
        primary: "red",
    },
    fonts: {
        fontStyle1: "Roboto, sans-serif"
    }
};

describe("Home", () => {
    it("Should render Home element", async () => {
        render(
            <ThemeProvider theme={TestTheme}>
                <DollarExchangeRateProvider>
                    <Home />
                </DollarExchangeRateProvider>
            </ThemeProvider>
        );
        
        const IsHomeRender = screen.getByTestId('home-container');
        expect(IsHomeRender).toBeInTheDocument();
    });
});
