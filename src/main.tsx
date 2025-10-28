import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router";
import router from "./Routes/Routes";
import { ThemeProvider } from "./providers/theme.provider";
import { store } from "./redux/store";
import { Toaster } from "./components/ui/sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        <Toaster position="top-center" richColors closeButton />
      </ThemeProvider>
    </ReduxProvider>
  </StrictMode>
);
