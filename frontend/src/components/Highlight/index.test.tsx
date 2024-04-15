import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { Highlight } from "./index";
import highlightedElementsReducer, {
  setElements,
} from "../../app/highlightedElementsSlice";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

describe("Highlight Component", () => {
  const setup = (elementsList = ["H", "O", "Li"]) => {
    const store = configureStore({
      reducer: {
        elements: () => ({ list: elementsList }),
        highlightedElements: highlightedElementsReducer,
      },
    });

    store.dispatch = jest.fn();

    const mockOnHighlighted = jest.fn();

    const utils = render(
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <Highlight text="H O Li" onHighlighted={mockOnHighlighted} />
        </ThemeProvider>
      </Provider>
    );

    return { ...utils, mockOnHighlighted, store };
  };
  it("renders highlighted parts based on elements", async () => {
    const { container } = setup(["H", "Li"]);

    await waitFor(() => {
      const texts = Array.from(container.querySelectorAll("span")).map(
        (element) => element.textContent
      );
      expect(texts).toEqual(expect.arrayContaining(["H", "Li"]));
    });
  });
  it("calls onHighlighted with the highlighted elements", async () => {
    const { mockOnHighlighted } = setup(["H", "Li"]);
    await waitFor(() => {
      expect(mockOnHighlighted).toHaveBeenCalledWith(
        expect.arrayContaining(["H", "Li"])
      );
    });
  });
  it("dispatches setElements action with highlighted parts", async () => {
    const { store } = setup(["H", "O", "Li"]);
    await waitFor(() => {
      expect(store.dispatch).toHaveBeenCalledWith(
        setElements(expect.arrayContaining(["H", "O", "Li"]))
      );
    });
  });
  it("does not render highlights for elements not in list", () => {
    setup([]);
    expect(screen.queryByText("H")).not.toBeInTheDocument();
    expect(screen.queryByText("O")).not.toBeInTheDocument();
    expect(screen.queryByText("Li")).not.toBeInTheDocument();
  });
  it("renders non-highlighted parts as normal text", () => {
    const { container } = setup(["O"]);
    expect(container).toHaveTextContent("H O Li"); // Checking for non-highlighted parts like spaces and 'Li'
  });
});
