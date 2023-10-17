import React from "react";
import { render, screen } from "@testing-library/react-native";
import ErrorMessage from "../../../../src/components/shared/ErrorMessage/ErrorMessage";
describe("<ErrorMessage />", () => {
  it("should be defined", async () => {
    const message = "Something went wrong";
    render(<ErrorMessage />);
    const result = await screen.findByText(message);
    expect(result).toBeDefined();
  });
});
