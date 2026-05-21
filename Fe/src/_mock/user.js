import { sample } from "lodash";
import { faker } from "@faker-js/faker";

// ----------------------------------------------------------------------

export const users = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.person.fullName(),
  company: faker.company.name(),
  isVerified: faker.datatype.boolean(),
  status: sample(["active", "banned"]),
  role: sample([
    "Leader",
    "Hr Manager",
    "UI Designer",
    "UX Designer",
    "UI/UX Designer",
    "Project Manager",
    "Backend Developer",
    "Full Stack Designer",
    "Front End Developer",
    "Full Stack Developer",
  ]),
}));

export const convertpackagagesList = (array) => {
  return array?.map((item, index) => ({
    id: item?.id,
    avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
    name: item?.hostEmail,
    company: item?.packageName,
    isVerified: faker.datatype.boolean(),
    status: sample(["active", "banned"]),
    venue: item?.venue,
    description: item?.description,
    capacity: item?.capacity,
  }));
};
