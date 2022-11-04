export interface SkillType {
  id: string;
  name: string;
  description: string;
  img_url: string;
  top: number;
  left: number;
  width: number;
}

export type SkillDataType = SkillType[];
