import './styles/index.css';
// Supports weights 100-900
import '@fontsource-variable/roboto';

import { createRouter, RouterProvider } from '@tanstack/react-router';
import { Analytics } from '@vercel/analytics/react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

// Create a new router instance
const router = createRouter({ routeTree, basepath: import.meta.env.VITE_BASE_PATH });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('No root element found');
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
      <Analytics />
    </StrictMode>,
  );
}
