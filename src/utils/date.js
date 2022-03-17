const ONE_HOUR_TIMESTEMP = 3600000;
const TWENTY_TWO_HOURS_TIMESTEMP = ONE_HOUR_TIMESTEMP * 22;
const TWENTY_FOUR_HOURS_TIMESTEMP = ONE_HOUR_TIMESTEMP * 24;

export function hasPassedMoreThan22Hours(dateThatTookLastPill) {
  return (
    new Date() - new Date(dateThatTookLastPill) > TWENTY_TWO_HOURS_TIMESTEMP
  );
}

export function hasPassedMoreThan24Hours(dateThatTookLastPill) {
  return (
    new Date() - new Date(dateThatTookLastPill) > TWENTY_FOUR_HOURS_TIMESTEMP
  );
}

export function isNextDay(dateThatTookLastPill) {
  return new Date().getDate() > new Date(dateThatTookLastPill).getDate();
}
