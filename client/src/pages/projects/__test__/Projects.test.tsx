import { render, screen } from "@testing-library/react";
import { projectGenerator } from "../../../test/data-gererators";
import Description from "../Description";

describe("<Description />", () => {
  test("render project informantion in Description", () => {
    const { summary, main_function, skills, git, result } = projectGenerator();
    render(
      <Description
        summary={summary}
        main_function={main_function}
        skills={skills}
        git={git}
        result={result}
      />
    );

    const summaryText = screen.getByText(summary);
    expect(summaryText).toBeInTheDocument();
  });
});
