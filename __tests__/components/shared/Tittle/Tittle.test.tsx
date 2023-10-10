import React from "react";
import Tittle from "../../../../src/components/shared/Tittle/Tittle";
import { render, screen } from "@testing-library/react-native";
describe("<Tittle />", () => {
  it("should be defined", async () => {
    const children = "123654";
    render(<Tittle>{children}</Tittle>);
    const result = await screen.findByText(children);
    expect(result).toBeDefined();
  });
});
