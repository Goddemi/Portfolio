import Greeting from "./Greeting";
import renderer from "react-test-renderer";

describe("Greeting", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<Greeting />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
