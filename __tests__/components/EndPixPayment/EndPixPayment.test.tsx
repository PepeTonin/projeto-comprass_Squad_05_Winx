import React from "react";
import { render, screen } from "@testing-library/react-native";
import EndPixPayment from "../../../src/components/EndPixPayment/EndPixPayment";
describe("<EndPixPayment />", () => {
  it("should be defined", async () => {
    const testId = "EndPixPayment";
    render(<EndPixPayment />);
    const result = await screen.findByTestId(testId);
    expect(result).toBeDefined();
  });
});
