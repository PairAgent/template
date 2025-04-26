import React from 'react';
import {
  RouterProvider,
} from "react-router";
import { createRoot } from "react-dom/client";
import { router } from './router';

const reactRootElement = document.getElementById("root");

if (!reactRootElement) {
  throw new Error("Root element not found");
}

createRoot(reactRootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
