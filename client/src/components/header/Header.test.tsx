import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Route } from "react-router-dom";
import { withRouter } from "../../test/utils";
import Header from "./Header";
import HeaderBar from "./HeaderBar";

describe("Header", () => {
  test("header renders correctly", async () => {
    render(
      withRouter(<Route path="/" element={<Header title={"안녕하세요 !"} />} />)
    );

    expect(await screen.findByText("안녕하세요 !")).toBeInTheDocument();
  });

  test("header-bar renders correctly", async () => {
    render(
      withRouter(<Route path="/" element={<HeaderBar title={"title"} />} />)
    );

    expect(await screen.findByText("title")).toBeInTheDocument();
  });

  test("header-bar click and navigate to home", () => {
    render(
      withRouter(
        <>
          <Route path="/" element={<div>hi</div>} />{" "}
          <Route path="/bar" element={<HeaderBar title={"title"} />} />
        </>,
        "/bar"
      )
    );

    const link = screen.getByText("portfolio");
    userEvent.click(link);

    expect(screen.getByText("hi")).toBeInTheDocument();
  });
});
