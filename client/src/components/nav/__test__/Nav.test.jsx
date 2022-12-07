import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route } from "react-router-dom";
import { withRouter } from "../../../test/utils";
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

test("click navlink to navigate", () => {
  const NewLocation = () => {
    return <div>welcome</div>;
  };
  const menuData = [{ name: "loca", to: "/loca", description: "test" }];

  render(
    withRouter(
      <>
        <Route path="/" element={<NavContent menuData={menuData} />} />
        <Route path="/loca" element={<NewLocation />} />
      </>
    )
  );

  expect(screen.getByText("loca")).toBeInTheDocument();

  userEvent.click(screen.getByText("loca"));
  expect(screen.getByText("welcome")).toBeInTheDocument();
});
