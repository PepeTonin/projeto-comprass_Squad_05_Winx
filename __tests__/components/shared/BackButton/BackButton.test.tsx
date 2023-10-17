import React from "react";
import { render, screen } from "@testing-library/react-native";
import BackButton from "../../../../src/components/shared/BackButton/BackButton";
describe("<BackButton />", () => {
  it("should be defined", async () => {
    const testID = "BackButton";
    render(<BackButton color="black" />);
    const result = await screen.findByTestId(testID);
    expect(result).toBeDefined();
  });
});
