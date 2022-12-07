import { withRouter } from '../../../test/utils';
import Skills from '../Skills';



describe("Images", () => {
  const fakeSkillData = {
    skillData: jest.fn(),
  };

  afterEach(() => fakeSkillData.skillData.mockReset());

  const exData = [
    {
      id: "js",
      name: "Javascript",
      img_url: "/reserve/imgs/jsImg.png",
      top: 50,
      left: 30,
      width: 250,
    },
  ];

  test("images fetch", () => {
    fakeSkillData.skillData.mockImplementation(() => exData);
    const {asFragment} = render(<Skills skillData={}/>)
  });
});
