import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter, Routes } from "react-router-dom";

export const withRouter = (routes: any, initialEntry = "/") => {
  return (
    <MemoryRouter initialEntries={[initialEntry]}>
      <Routes>{routes}</Routes>
    </MemoryRouter>
  );
};

const createTestQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => {},
    },
  });
};

const testClient = createTestQueryClient();

export const wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={testClient}>{children}</QueryClientProvider>
  );
};
