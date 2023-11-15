import { render } from "@testing-library/react";
import React from "react";

// https://testing-library.com/docs/react-testing-library/setup#custom-render
const customRender = (ui: React.ReactElement, options = {}) =>
    render(ui, { wrapper: ({ children }) => children, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
