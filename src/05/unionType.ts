import { hasUncaughtExceptionCaptureCallback } from "process";

type AnimalType = {
  species: string;
};
type HumanType = {
  name: string;
};
type UsersType = AnimalType | HumanType;

const tama: UsersType = {
  species: "Felis silvestris catus";
};
const james: UsersType = {
  name: "james";
}
