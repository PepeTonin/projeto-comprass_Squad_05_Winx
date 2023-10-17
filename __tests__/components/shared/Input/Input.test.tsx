import React from "react";
import { render, screen } from "@testing-library/react-native";

import AuthInput from "../../../../src/components/shared/Input/Input";
describe("<Input />", () => {
  it("should be defined", async () => {
    const testID = "Input";
    render(
      <AuthInput
        autoCapitalize="characters"
        editable={false}
        label="test"
        value=""
      />
    );
    const result = await screen.findByTestId(testID);
    expect(result).toBeDefined();
  });
});
