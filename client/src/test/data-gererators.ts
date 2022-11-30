import { faker } from "@faker-js/faker";

type Overrides = Record<string, any>;

export const projectGenerator = (overrides?: Overrides) => ({
  //   id: faker.datatype.uuid(),
  //   name: faker.internet.userName(),
  //   links: faker.internet.domainName(),
  summary: faker.datatype.string(),
  main_function: faker.datatype.array(),
  skills: faker.datatype.array(),
  git: faker.internet.domainName(),
  result: faker.internet.domainName(),
});
