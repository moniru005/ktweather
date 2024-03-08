import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import { ChakraProvider } from "@chakra-ui/react";
import AuthProviders from "./Providers/AuthProviders";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="" style={{ fontFamily: "Work Sans" }}>
    <AuthProviders>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider
          toastOptions={{ defaultOptions: { position: "top-right" } }}
        >
          <RouterProvider router={router}></RouterProvider>
        </ChakraProvider>
      </QueryClientProvider>
    </AuthProviders>
  </div>
);
