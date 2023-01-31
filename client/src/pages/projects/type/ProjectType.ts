export default interface ProjectType {
  id?: string;
  name?: string;
  links?: string[];
  summary: string;
  main_function: (string | number)[];
  retrospective?: string;
  skills: (string | number)[];
  git: string;
  result?: string;
}

export type ProjectDataType = ProjectType[];
