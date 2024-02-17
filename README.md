# Workana Challenge

**_Created by Gabriel Leal Sala de Oliveira_**

## Overview

The primary goal of the Periodic Table Highlighter Challenge is to blend educational concepts from chemistry with modern web development practices. By highlighting periodic table elements within text, the project serves as both a learning tool for developers interested in advancing their skills with React, Redux, and Redux-Thunk, and an engaging educational resource for those fascinated by the periodic table.

This project invites contributors to dive into the world of React and Redux, encouraging the exploration of state management, asynchronous JavaScript, and the application of CSS for dynamic styling. It stands as a testament to the power of collaborative development and the endless possibilities that modern web technologies can offer.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installation

Follow these steps to set up the development environment on your local machine.

### Clone the Repository

First, you need to clone the repository to your local machine. Open a terminal and run the following command:

```bash
 git clone https://github.com/gabriel-sala-br/react-challenge.git
```

### Install Dependencies

Navigate to the project directory:

```bash
 cd react-challenge
```

Then, install the project dependencies using npm by running:

```bash
 npm install
```

This command reads the `package.json` file and installs all the necessary dependencies listed under `dependencies` and `devDependencies`

### Start the Development Server

Once the installation is complete, you can start the development server by running:

```bash
npm start
```

This command will run the `eslint`(Check for linting errors in in the codebase) and `start` the Vite development server. By default, your application will be accessible at `http://localhost:3000` in your web browser.

You should now see your React application running. If you make any changes to the source files, the development server will automatically reload the page with the updated changes.

### Additional Scripts

Your `package.json` file includes additional scripts that you can utilize:

- **Fix Linting Issues:** Automatically fix many linting errors.

```bash
npm run lint:fix
```

- **Build the Application:** Compile the application for production deployment.

```bash
npm run build
```

### Using Docker to Set Up the Environment

To simplify the setup process, we use Docker. Follow these steps to get your environment ready with Docker.

#### Prerequisites for Docker

Ensure you have Docker and Docker Compose installed on your system. You can download them from the [Docker website](https://www.docker.com/products/docker-desktop/).

#### Running the Project with Docker Compose

Navigate to the project directory and run the following command to start the project:

```bash
docker-compose up
```

This command builds the Docker image if it's not already built and starts the container. Your app should now be accessible at `http://localhost:3000`.

#### Making Changes

If you make changes to the Dockerfile or docker-compose.yml, rebuild the services using:

```bash
docker-compose up --build
```

## Project Structure Overview

This document provides an overview of the `react-challenge` project, detailing the configuration and role of the `package.json` file and its specified dependencies and scripts.

## package.json:

### Dependencies

- `@reduxjs/toolkit`, `redux`, `react-redux`, `redux-thunk`: A set of libraries for efficient state management in React applications, utilizing the Redux library and middleware for asynchronous actions.
- `react`, `react-dom`: Core libraries for building React applications, where react is the main library, and react-dom enables DOM-specific methods.
- `styled-components`: Allows for styling React components with tagged template literals, enabling dynamic styling and theming.

### DevDependencies

- `@types/react`, `@types/react-dom`: Type definitions for React and ReactDOM, enhancing development experience in TypeScript.
- `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`: Adds TypeScript support to ESLint, allowing for linting of TypeScript files.
- `@vitejs/plugin-react`: Enables React fast refresh and other features in Vite.
- `eslint`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`: ESLint and its plugins for enforcing code style and quality in React applications.
- `typescript`: Adds TypeScript language support, allowing for static type checking.
- `vite`: A modern build tool for faster and leaner development experiences.

## src/App.tsx:

The `src/App.tsx` file is the root component of the "react-challenge" project, orchestrating the application's primary structure and styling. It leverages React's component architecture, styled-components for theming, and global styling to establish a cohesive and scalable foundation for the application. Below is a breakdown of its key functionalities:

### Import Statements

- **ThemeProvider** from "styled-components": Utilizes the ThemeProvider component to pass the theme object down the React component tree, enabling theme-based styling throughout the application.
- **defaultTheme** from "./styles/themes/default": Imports the default theme object, which contains definitions for colors, fonts, and other thematics that can be used throughout the application.
- **GlobalStyle** from "./styles/global": Incorporates global styles into the application, ensuring a consistent look and feel across all components. This includes resetting browser defaults and setting global CSS properties.
- **Home** from "./screens/Home/": Imports the Home component, which serves as the entry point for the application's main interface.

### Key Functionalities

- **ThemeProvider:** Serves as the mechanism for theming the application, making the defaultTheme properties accessible to all styled components.
- **GlobalStyle:** Applies global styles to the application, ensuring uniformity in basic styling across different browsers and a clean slate for component-specific styling.
- **Home Component:** Acts as the main content of the application, where specific screens, features, or functionalities are introduced to the user.

## components:

### src/components/Highlight

The `Highlight` component is a specialized React component within the "react-challenge" project designed to dynamically identify and visually emphasize elements from the periodic table found within a given text. It utilizes Redux for state management to access the list of elements and applies conditional rendering to highlight matching words.

#### Key Imports and Dependencie

- **React:** The core library to define the component and its behavior.
- **useSelector from "react-redux":** A hook that allows the component to extract data from the Redux store's state, specifically the list of periodic table elements.
- **RootState from "../../redux/store":** The type definition for the root state of the Redux store, facilitating type-safe access to the state within the component.
- **TitleHighlight from "./styles":** A styled component that defines the visual appearance of highlighted text, ensuring that the matched elements stand out in the context where the Highlight component is used.

#### Component Structure

- **HighlightElementsProps interface:** Defines the props expected by the Highlight component, which includes a single text prop of type string. This prop represents the text within which the component will search for periodic table elements to highlight.
- **Highlight Functional Component:** The main functional component that takes text as a prop, uses Redux's `useSelector` to access the list of elements, and processes the text to identify and highlight matches.

#### Core Functionality

- **Dynamic Text Processing:** The component constructs a regular expression based on the list of periodic table elements retrieved from the Redux store and splits the input text into an array of substrings. It then maps over these substrings to either wrap matches in the `TitleHighlight` styled component for visual emphasis or return the original text.
- **State-Driven Highlighting:** The use of Redux state for storing the list of elements ensures that the component's behavior is consistent across the application and responds to state changes, such as updates to the list of elements.

## data:

### src/data/elements.json:

The `src/data/elements.json` directory of the "react-challenge" project houses JSON files and other data assets crucial for the application's functionality. A key file within this directory is a JSON file containing an array of the periodic table's elements. This file serves as a foundational data source for the project, enabling dynamic interactions and functionalities related to chemical elements.

The list of elements is utilized by the `Highlight` component to create a regex pattern. This pattern is then used to match and highlight occurrences of these elements' symbols within given texts. The seamless integration of this data with React components exemplifies the application's ability to merge educational content with interactive web technology.

#### Periodic Table Elements JSON File

The JSON file within the `src/data/elements.json` directory provides a comprehensive list of elements from the periodic table, including:

- Essential elements like Hydrogen (**H**), Helium (**He**), and Carbon (**C**).
- Transition metals such as Iron (**Fe**), Copper (**Cu**), and Gold (**Au**).
- Rare earth elements and others extending across the periodic table to include Nobel Gases, Alkali Metals, and more, up to Oganesson (**Og**).

This array is instrumental for the project's core feature of dynamically highlighting these elements within text inputs, such as names or sentences, provided by the users.

## redux:

### src/redux/elementsSlice.ts:

The elementSlice.ts file within the "react-challenge" project encapsulates the Redux logic for managing the state related to the periodic table elements. Utilizing Redux Toolkit's `createSlice` and `createAsyncThunk`, this file defines asynchronous actions, reducers, and the initial state for handling the elements' data efficiently.

The `elementSlice.ts` file demonstrates advanced state management strategies within a React project, emphasizing asynchronous data fetching, state updates, and the Redux Toolkit's pattern for reducing boilerplate in Redux applications. It serves as a central piece for managing the periodic table elements data, making it accessible throughout the application for any functionality that requires interaction with these elements.

#### Key Concepts

- **ElementsState Interface:** Defines the shape of the state for the elements, including the list of elements (list), a loading state indicator (isLoading), and an error state (`error`) for handling asynchronous data fetching.
- **Initial State:** Sets up the initial state for the elements slice, indicating that no elements are loaded initially, the slice is not in a loading state, and there's no error.
- **loadElements AsyncThunk:** An asynchronous thunk action created with createAsyncThunk that handles the logic for loading the elements from the `../data/elements.json` file. It also sorts the elements by their symbol length in descending order for any specific use case that might require this sorting.

#### Reducers and Actions

- **Reducers:** The elementsSlice employs reducers to handle actions such as resetting the elements list to its initial state with resetElements. These reducers are part of the slice and modify the state based on dispatched actions.
- **Extra Reducers for Asynchronous Actions:** The slice uses extra reducers to handle the states of the asynchronous `loadElements` thunk, such as setting the loading state when the request is pending, updating the list of elements upon successful fetch, and handling errors.

#### Usage and Integration

- **Redux Store:** The elementSlice is designed to be incorporated into the Redux store of the application, allowing components to dispatch the loadElements action to fetch and populate the state with the periodic table elements and access this state via selectors.
- **Dynamic Data Fetching:** By leveraging an asynchronous thunk, the slice provides a robust pattern for fetching, loading, and error handling of external data, showcasing Redux Toolkit's capabilities for managing asynchronous logic in Redux.

### src/redux/textSlice.ts:

The `textSlice.ts` module within the "react-challenge" project encapsulates the Redux logic for managing a piece of state specifically related to textual content. This slice leverages the Redux Toolkit's createSlice function to streamline the creation of action creators and reducers, facilitating a more efficient and straightforward state management experience.

The `textSlice.ts` file serves as an exemplary demonstration of using Redux Toolkit for managing specific slices of application state. In this case, it manages textual content, illustrating a straightforward yet scalable approach to state management with Redux. By focusing on a single aspect of the application's state, the `textSlice` ensures that state updates are encapsulated within a well-defined scope, promoting maintainability and readability.

#### Key Concepts

- **TextState Interface:** Defines the structure of the state concerning textual content, consisting of a single property `content` which is a string. This property holds the textual data that the application needs to manage globally.

- **Initial State:** Establishes the initial state for the text slice, with content initialized as an empty string. This setup represents the default state before any user interaction or data manipulation occurs.

#### Reducers and Actions

- **Reducers:** The textSlice employs a reducer, `updateContent`, which responds to actions that carry a string payload. This reducer updates the content state with the provided string, demonstrating a simple yet powerful pattern for state updates in response to user actions or application events.

#### Usage and Integration

- **Dispatching Actions:** Components within the application can dispatch the `updateContent` action to update the global state's textual content. This pattern showcases the Redux Toolkit's simplification of the Redux workflow, enabling components to easily interact with the Redux store without cumbersome boilerplate.
- **Accessing State:** Other parts of the application can access the `content` state through selectors, allowing for a reactive UI that updates in response to state changes. This demonstrates the Redux Toolkit's efficiency in facilitating communication between the application's state and its UI.

### src/redux/store.ts:

The `store.ts` file in the "react-challenge" project is crucial for setting up and configuring the Redux store, which serves as the central repository for the application's state. This file utilizes the Redux Toolkit's `configureStore` method to simplify the store's configuration and enhance its capabilities with middleware and devtools integration.

The `store.ts` file is foundational for the state management strategy in the "react-challenge" project. By leveraging Redux Toolkit, it establishes a structured, maintainable, and type-safe approach to managing global state across the application. This setup ensures that components can dispatch actions and subscribe to state updates efficiently, fostering a reactive and cohesive application architecture.

#### Configuring the Store

- **configureStore:** This method from Redux Toolkit simplifies the store setup process, automatically configuring the Redux DevTools extension and middleware like Redux Thunk for asynchronous actions. It accepts a configuration object with a `reducer` field that combines the application's slice reducers.
- **Reducers:** The store is configured with two main slice reducers: `textReducer` and `elementsReducer`. These reducers manage distinct portions of the application's state, dealing with textual content and the periodic table elements, respectively.

#### Store Setup Function

- **setupStore Function:** A custom function that encapsulates the `configureStore` call, making it easy to customize store creation if needed, such as for server-side rendering or adding additional middleware.

#### Exported Store Instance

- **store:** The exported instance of the Redux store, created by invoking `setupStore()`. This instance is used throughout the application to access and manipulate the state.

#### Type Definitions

- **RootState:** A TypeScript type representing the shape of the entire Redux state tree, derived from `store.getState`. It is used throughout the application to type-check the state structure.
- **AppDispatch:** A type representing the Redux store's dispatch function, allowing for typed dispatch calls with TypeScript support.
- **AppThunk:** A generic type for defining Redux Thunks, allowing for asynchronous logic that can dispatch actions or access the state. It specifies the thunk's return type, the state type, any additional argument types, and the action types it might dispatch.

## screens:

### src/screens/Home

The `Home` screen is a core component of the "react-challenge" project, serving as the main user interface where the application's primary functionalities are interacted with and displayed. This component elegantly combines React hooks, Redux for state management, and styled components for a seamless user experience.

The `Home` component exemplifies a practical implementation of React and Redux Toolkit in building interactive and state-driven applications. By integrating textual data processing with dynamic styling and state management, it showcases the application's core feature—highlighting periodic table elements within user-provided text. This component not only serves as the primary user interaction point but also demonstrates modern web development practices with React, styled components, and Redux.

#### Import Statements

- **React Hooks:** Utilizes useState for local state management and `useEffect` for side effects, such as fetching data on component mount.
- **Redux Dispatch:** Employs `useDispatch` from `react-redux` to dispatch actions, specifically to load elements from the periodic table into the Redux store upon component initialization.
- **Styled Components:** Imports styled components like HomeContainer, Button, Input, Title, InputGroup, Label, and InputsContainer for structured and maintainable styling.
- **Highlight Component:** Incorporates the `Highlight` component to dynamically render text with highlighted periodic table elements.

#### Component Structure and State Management

- **Local State:** Manages form data (`firstName` and `lastName`) and a flag (`shouldHighlight`) to control the highlighting behavior based on user interaction.
- **Form Handling:** Implements `handleInputChange` to update form data state on user input and `handleFetchDetails` to toggle the highlighting effect.

#### Functionalities and User Interaction

- **Dynamic Data Fetching:** On component mount, the `useEffect` hook dispatches `loadElements` to populate the Redux store with elements from the periodic table, ensuring data is available for the highlighting functionality.
- **Conditional Rendering:** Based on `shouldHighlight`, the component conditionally renders text with or without highlight. This visual feedback allows users to interactively see how periodic table elements are part of their names.
- **Form Input:** Users can input their first and last names, which are then processed for potential highlighting. This interaction is facilitated by the Input components within InputGroup containers, providing a structured and accessible user interface.
- **Action Trigger:** The `Breakify` button triggers the highlighting process, demonstrating a practical use case of Redux state and React event handling.

## styles:

### src/styles/theme/defaul.ts

The `default.ts` object encapsulates several key-value pairs, each representing a specific color code that is used across the application for styling components.

The creation of a `defaultTheme` object aligns with best practices in modern web development, emphasizing the importance of design consistency, ease of maintenance, and the ability to scale the application's UI with minimal effort. It showcases how the "react-challenge" project adopts an organized and efficient approach to styling, making the application's development and future enhancements more manageable.

#### Theme Structure

The defaultTheme object encapsulates several key-value pairs, each representing a specific color code that is used across the application for styling components. The color codes are organized semantically, with each name providing an intuitive understanding of its usage context:

- **white:** Defines the base color for backgrounds, text, or elements where a pure white (`#fff`) is required.
- **green-300** and **green-500:** Specifies shades of green, with `green-300` (`#00B37E`) for lighter elements such as highlights or accents, and `green-500` (`#055036`) for more pronounced elements like buttons or active states.
- **grey-100** and **grey-700:** Outlines shades of grey, where `grey-100` (`#B3B3B3`) might be used for subtle elements or disabled states, and `grey-700` (`#212121`) for text or elements requiring a darker shade for contrast against lighter backgrounds.

#### Usage and Integration

- **Styled Components:** The `defaultTheme` is integrated into the application via the `ThemeProvider` component from `styled-components`. This approach allows any styled component within the application to access the theme's properties directly, ensuring a consistent look and feel across the application.
- **Maintainability** and **Scalability**: Having a centralized theme object simplifies the process of updating or changing the application's color scheme. Changes to the `defaultTheme` will automatically propagate throughout the application, reducing the need for manual updates across individual components.

### src/styles/global.ts

The `global.ts` file within the src/styles directory is a cornerstone of the "react-challenge" project, defining global styles that are applied across the entire application. By using the `createGlobalStyle` function from `styled-components`, this file establishes a consistent baseline for styling, ensuring uniformity and coherence in the application's overall look and feel.

- **Consistency Across Browsers:** The global styles aim to minimize discrepancies in how different browsers render the application, creating a uniform experience for all users.
- **Efficient Styling Foundation:** By setting foundational styles globally, individual components can be styled with the assumption that these baseline styles are in place, streamlining the development process and reducing the need for repetitive styling.
- **Enhanced Aesthetics:** The application of font smoothing and a thoughtful default font stack improves text readability and aesthetics, contributing to a more polished and professional appearance.

## Final Considerations and Challenges

Embarking on the "react-challenge" project, I set out to bridge the gap between the fascinating world of chemistry and the dynamic realm of web development. This journey, while immensely rewarding, was fraught with challenges that tested my skills and creativity.

One of the first hurdles I encountered was finding an effective way to integrate the periodic table elements into a web application. The task demanded not just a technical solution but a creative one that allowed users to engage with the data interactively. Developing the Highlight component to parse and visually emphasize elements in text was a testament to the power of combining education with technology.

As the project evolved, so did the complexity of managing its state. Employing Redux and Redux Toolkit, I delved into the nuanced world of global state management across components. Introducing asynchronous actions with Redux Thunk for fetching data added another layer of sophistication, pushing me to find a delicate balance between responsiveness and performance.

Achieving design consistency and responsive behavior across various devices presented another significant challenge. Adopting styled-components and establishing a global theme were steps towards creating a unified appearance.

Maintaining high code quality and ensuring the maintainability of the project were ongoing challenges. The incorporation of ESLint and the decision to use TypeScript were pivotal in enforcing coding standards and minimizing errors.

Beyond the technical challenges, the "react-challenge" project was a profound journey of personal growth and learning. It expanded my understanding of React, Redux, and the broader landscape of web development. Each obstacle encountered was a learning opportunity, pushing me to explore deeper and emerge with more robust solutions.
