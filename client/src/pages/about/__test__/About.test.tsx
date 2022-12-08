import renderer from "react-test-renderer";
import ContentBox from "../ContentBox";

describe("About Page", () => {
  test("About Contents render correctly", () => {
    const [variable, content] = ["test", [{ keyName: "이름", value: "test" }]];
    const tree = renderer
      .create(<ContentBox variable={variable} content={content} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
