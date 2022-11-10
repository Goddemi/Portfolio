export default interface ProjectType {
  id?: string;
  name?: string;
  links?: string[];
  summary: string;
  mainFunction: string[];
  skills: string[];
  git: string;
  result?: string;
}
