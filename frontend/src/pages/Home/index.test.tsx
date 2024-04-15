import { Provider } from "react-redux";
import { store } from "../../app/store";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./index";
import { configureStore } from "@reduxjs/toolkit";
import userEvent from "@testing-library/user-event";
import fetchElementsBySymbolsReducer, {
  fetchElementsBySymbols,
} from "../../app/fetchElementsBySymbolsSlice";
import elementsReducer, { loadElements } from "../../app/elementsSlice";
import * as apiService from "../../app/services/apiService";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

jest.mock("../../app/services/apiService");

describe("Home Component - API Success Tests", () => {
  let store: any;

  beforeEach(() => {
    // Configuração da store com o reducer necessário
    store = configureStore({
      reducer: {
        elements: elementsReducer,
        fetchElementsBySymbols: fetchElementsBySymbolsReducer, // Assegure-se de incluir este reducer
      },
    });
    (apiService.getAllElements as jest.Mock).mockResolvedValue([
      "H",
      "He",
      "Li",
    ]);

    (apiService.getElements as jest.Mock).mockResolvedValue([
      {
        symbol: "Ga",
        definition: [
          "O Ga é um metal macio, prateado e de baixo ponto de fusão. É usado na fabricação de semicondutores.",
        ],
      },
      {
        symbol: "O",
        definition: [
          "O oxigênio é um elemento altamente reativo, essencial para a respiração dos seres vivos.",
        ],
      },
    ]);
  });
  it("loadElements - verifies the presence of specific elements", async () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <Home />
        </ThemeProvider>
      </Provider>
    );

    await store.dispatch(loadElements());

    await waitFor(() => {
      const state = store.getState().elements;
      expect(state.list).toEqual(expect.arrayContaining(["H", "He", "Li"]));
      expect(state.isLoading).toBe(false);
      expect(state.error).toBeNull();
    });
  });
  it("fetchElementsBySymbols - should handle fetching symbols", async () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <Home />
        </ThemeProvider>
      </Provider>
    );
    fireEvent.click(screen.getByRole("button", { name: /breakify/i }));

    const symbolsData = [
      { symbol: "H", definition: ["Hydrogen is the first element."] },
    ];
    store.dispatch({
      type: fetchElementsBySymbols.fulfilled.type,
      payload: symbolsData,
    });
    await waitFor(() =>
      expect(
        screen.getByText(/hydrogen is the first element./i)
      ).toBeInTheDocument()
    );
  });
});

describe("Home Component - API Error Tests", () => {
  let store: any;

  beforeEach(() => {
    (apiService.getAllElements as jest.Mock).mockRejectedValue(
      new Error("Failed to fetch")
    );
    (apiService.getElements as jest.Mock).mockRejectedValue(
      new Error("Failed to fetch symbols")
    );
    store = configureStore({
      reducer: {
        elements: elementsReducer,
        fetchElementsBySymbols: fetchElementsBySymbolsReducer,
      },
    });
  });
  it("loadElements handles errors", async () => {
    await store.dispatch(loadElements());

    const state = store.getState().elements;
    expect(state.isLoading).toBe(false);
    expect(state.error).toBe("Failed to fetch");
  });
  it("fetchElementsBySymbols handles errors", async () => {
    // Dispatch the fetchElementsBySymbols action
    await store.dispatch(fetchElementsBySymbols(["H", "He"]));

    await waitFor(() => {
      const state = store.getState().fetchElementsBySymbols;
      expect(state.isLoading).toBe(false);
      expect(state.error).toBe("Failed to fetch symbols");
    });
  });
});

describe("Test the functionalities in Home Component", () => {
  it("checks if the input fields are initially empty", () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <Home />
        </ThemeProvider>
      </Provider>
    );

    const firstNameInput = getByPlaceholderText(
      "Digite seu nome"
    ) as HTMLInputElement;
    const lastNameInput = getByPlaceholderText(
      "Digite seu sobrenome"
    ) as HTMLInputElement;

    expect(firstNameInput.value).toBe("");
    expect(lastNameInput.value).toBe("");
  });
  it("updates input fields when user types", () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <Home />
        </ThemeProvider>
      </Provider>
    );

    // Use cast to HTMLInputElement to access 'value'
    const firstNameInput = getByPlaceholderText(
      "Digite seu nome"
    ) as HTMLInputElement;
    const lastNameInput = getByPlaceholderText(
      "Digite seu sobrenome"
    ) as HTMLInputElement;

    // Simulate user typing into the input fields
    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });

    // Check if inputs display the updated values
    expect(firstNameInput.value).toBe("John");
    expect(lastNameInput.value).toBe("Doe");
  });
  it("renders the button 'Breakify' and it is disabled when inputs are empty", () => {
    const { getByText } = render(
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <Home />
        </ThemeProvider>
      </Provider>
    );

    const button = getByText("Breakify");
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
  it("enable button 'Breakify' when inputs are filled", () => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <Home />
        </ThemeProvider>
      </Provider>
    );

    const inputFirstName = getByPlaceholderText("Digite seu nome");
    const inputLastName = getByPlaceholderText("Digite seu sobrenome");
    fireEvent.change(inputFirstName, { target: { value: "John" } });
    fireEvent.change(inputLastName, { target: { value: "Doe" } });

    const button = getByText("Breakify");
    expect(button).not.toBeDisabled();
  });
  it("allows navigation and interaction with inputs via keyboard", async () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <Home />
        </ThemeProvider>
      </Provider>
    );

    const firstNameInput = screen.getByPlaceholderText("Digite seu nome");
    const lastNameInput = screen.getByPlaceholderText("Digite seu sobrenome");

    // Simula a navegação e seleção de campos de entrada via tabulação
    await userEvent.tab();

    // Verifica se o primeiro campo de texto está focado
    expect(firstNameInput).toHaveFocus();

    // Simula digitação no campo de entrada
    await userEvent.type(firstNameInput, "John");
    await waitFor(() => {
      expect(firstNameInput).toHaveValue("John");
    });

    // Move o foco para o próximo campo de entrada
    await userEvent.tab();
    expect(lastNameInput).toHaveFocus();

    // Simula digitação no segundo campo de entrada
    await userEvent.type(lastNameInput, "Doe");
    await waitFor(() => {
      expect(lastNameInput).toHaveValue("Doe");
    });
  });
});
