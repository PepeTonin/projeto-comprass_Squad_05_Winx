import React from "react";
import { render, screen } from "@testing-library/react-native";

import Button from "../../../../src/components/shared/Button/Button";
describe("<Button />", () => {
  it("should be defined", async () => {
    const testID = "Button";
    render(<Button />);
    const result = await screen.findByTestId(testID);
    expect(result).toBeDefined();
  });
});
