import React from "react";

import { render, screen, fireEvent } from "@testing-library/react-native";
import Card from "../../../src/components/Card/Card";

describe("<Card />", () => {
  it("should decrease de number", async () => {
    const hint = "Will Decrease";
    render(
      <Card
        amount={2}
        img="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
        name="Name Product"
        price="0"
      />
    );
    const button = await screen.findByAccessibilityHint(hint);
    fireEvent.press(button);

    const result = await screen.findByText("1");
    expect(result).toBeDefined();
  });
  it("should increase de number", async () => {
    const hint = "Will Increase";
    render(
      <Card
        amount={1}
        img="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
        name="Name Product"
        price="0"
      />
    );
    const button = await screen.findByAccessibilityHint(hint);
    fireEvent.press(button);

    const result = await screen.findByText("2");
    expect(result).toBeDefined();
  });
});
