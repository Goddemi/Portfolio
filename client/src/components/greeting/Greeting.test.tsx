import renderer from "react-test-renderer";
import Greeting from "./Greeting";

describe("Greeting", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<Greeting />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
