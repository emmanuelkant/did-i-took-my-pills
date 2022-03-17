import { writable } from "svelte/store";

export const initialState = {
  hadTookThePills: false,
  message:
    "We don't have info about your last time your took your pills, please took them today and update the app just after.",
  status: "",
}

export const pillsData = writable(initialState);
