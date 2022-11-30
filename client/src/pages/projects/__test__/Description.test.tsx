import { render, screen } from "@testing-library/react";
import { projectGenerator } from "../../../test/data-gererators";
import Description from "../Description";

test("render project informantion", () => {
  const projectData = projectGenerator();
  render(<Description projectData={projectData} />);
});
