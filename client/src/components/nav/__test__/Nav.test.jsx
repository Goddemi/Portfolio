import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Nav from "../Nav";
import NavContent from "../NavContent";

test("nav page setup", () => {
  render(
    <MemoryRouter>
      <Nav />
    </MemoryRouter>
  );

  expect(screen.getByText("Portfolio")).toBeInTheDocument();
});

test("navlink to navigate", async () => {
  const NewLocation = () => {
    return <div>welcome</div>;
  };
  const menuData = [{ name: "loca", to: "/loca", description: "test" }];

  render(
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<NavContent menuData={menuData} />} />
        <Route path="/loca" element={<NewLocation />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText("loca")).toBeInTheDocument();

  await userEvent.click(screen.getByText("loca"));
  expect(screen.getByText("welcome")).toBeInTheDocument();
});
