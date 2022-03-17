import { pillsData } from "./stores.js";
import {
  hasPassedMoreThan22Hours,
  hasPassedMoreThan24Hours,
  isNextDay,
} from "./utils/date";

export function getPillsStatus(dateThatTookPills) {
  switch (true) {
    case !dateThatTookPills:
      pillsData.update((oldPillsData) => ({
        ...oldPillsData,
        hadTookThePills: false,
      }));
      break;
    case hasPassedMoreThan24Hours(dateThatTookPills):
      pillsData.set({
        hadTookThePills: false,
        status: "danger",
        message: "You took your pills yesterday and YOU ARE LATE, take your pills now!",
      });
      break;
    case hasPassedMoreThan22Hours(dateThatTookPills):
      pillsData.set({
        hadTookThePills: false,
        status: "alert",
        message: "You took your pills yesterday and you should take your pills soon too.",
      });
      break;
    case isNextDay(dateThatTookPills):
      pillsData.set({
        hadTookThePills: true,
        status: "ok",
        message: "Take a deep breath you already took your pills yesterday.",
      });
      break;
    default:
      pillsData.set({
        hadTookThePills: true,
        status: "ok",
        message: "Take a deep breath you already took your pills today.",
      });
  }
}
