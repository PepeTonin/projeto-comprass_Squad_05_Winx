import React from "react";
import { render, screen } from "@testing-library/react-native";
import EndCardPayment from "../../../src/components/EndCardPayment/EndCardPayment";
describe("<EndCardPayment />", () => {
  it("should be defined", async () => {
    const testId = "EndCardPayment";
    render(<EndCardPayment />);
    const result = await screen.findByTestId(testId);
    expect(result).toBeDefined();
  });
});
