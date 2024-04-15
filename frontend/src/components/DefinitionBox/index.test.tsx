import { render, screen } from "@testing-library/react";
import { DefinitionBox } from ".";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

describe("DefinitionBox Component", () => {
  const mockData = [
    {
      symbol: "H",
      definition: ["Hydrogen is the lightest element."],
    },
    {
      symbol: "He",
      definition: ["Helium is the second lightest element."],
    },
    {
      symbol: "Li",
      definition: ["Lithium is a chemical element with symbol Li."],
    },
  ];

  it("renders correctly with multiple definitions", () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <DefinitionBox results={mockData} />
      </ThemeProvider>
    );

    mockData.forEach((item) => {
      expect(screen.getByText(item.symbol)).toBeInTheDocument();
      item.definition.forEach((def) => {
        expect(screen.getByText(def)).toBeInTheDocument();
      });
    });
  });

  it("renders correct number of definition texts", () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <DefinitionBox results={mockData} />
      </ThemeProvider>
    );

    const definitionTexts = screen.getAllByText((content, element: any) => {
      return (
        element.tagName.toLowerCase() === "p" &&
        mockData.some((e) => e.definition.includes(content))
      );
    });

    expect(definitionTexts.length).toBe(
      mockData.reduce((acc, curr) => acc + curr.definition.length, 0)
    );
  });

  it("handles empty results without crashing", () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <DefinitionBox results={[]} />
      </ThemeProvider>
    );
    expect(screen.queryByText(/is the/)).not.toBeInTheDocument();
  });
});
