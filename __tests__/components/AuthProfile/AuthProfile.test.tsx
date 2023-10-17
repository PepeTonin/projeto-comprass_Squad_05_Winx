import React from "react";

import { render, screen, fireEvent } from "@testing-library/react-native";
import Card from "../../../src/components/Card/Card";
import AuthProfile from "../../../src/components/AuthProfile/AuthProfile";

describe("<AuthProfile />", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it("should be defined", async () => {
    const text = "Language";
    render(<AuthProfile />);
    const result = await screen.findByText(text);

    expect(result).toBeDefined();
  });
});
