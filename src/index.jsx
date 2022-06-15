import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { AppLayout } from "@features/ui";

createRoot(window.rootElement).render(
  <StrictMode>
    <AppLayout />
  </StrictMode>
);
