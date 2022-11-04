import axios from "axios";
import { SkillDataType } from "./../type/SkillType";
import { SKILL_URL } from "../../../config";

export const getSkills = (): Promise<SkillDataType> => {
  return axios
    .get(SKILL_URL)
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
