import axios from "axios";
import { PROJECTS_DATA_URL } from "../../../config";
import ProjectType from "../type/ProjectType";

const getProjectData = async (): Promise<ProjectType[]> =>
  axios(PROJECTS_DATA_URL).then((response) => response.data);

export default getProjectData;
