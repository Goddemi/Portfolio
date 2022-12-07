import { MemoryRouter, Routes } from "react-router-dom";

export const withRouter = (routes: any) => {
  return (
    <MemoryRouter>
      <Routes>{routes}</Routes>
    </MemoryRouter>
  );
};
