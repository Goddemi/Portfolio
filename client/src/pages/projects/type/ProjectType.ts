export default interface ProjectType {
  id?: string;
  name?: string;
  links?: string[];
  summary: string;
  main_function: string[];
  skills: string[];
  git: string;
  result?: string;
}

export type ProjectDataType = ProjectType[];
