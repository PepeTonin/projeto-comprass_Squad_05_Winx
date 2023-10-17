import React from "react";
import { render, screen } from "@testing-library/react-native";
import EndBankSlipPayment from "../../../src/components/EndBankSlipPayment/EndBankSlipPayment";
describe("<EndBankSlipPayment />", () => {
  it("should be defined", async () => {
    const testId = "EndBankSlipPayment";
    render(<EndBankSlipPayment />);
    const result = await screen.findByTestId(testId);
    expect(result).toBeDefined();
  });
});
