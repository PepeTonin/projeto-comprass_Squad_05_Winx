import React from "react";
import { render, screen } from "@testing-library/react-native";
import UnAuthProfile from "../../../src/components/UnauthProfile/UnauthProfile";

describe("<UnauthProfile />", () => {
  it("should be defined", async () => {
    const testId = "UnauthProfile";
    render(<UnAuthProfile />);
    const result = await screen.findByTestId(testId);
    expect(result).toBeDefined();
  });
});
