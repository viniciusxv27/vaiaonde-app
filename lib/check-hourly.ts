import { getDay } from "date-fns";
import { toZonedTime } from "date-fns-tz";

import { IPlace } from "../app/(places)/[placeType]";

/**
 * Checks if a place is currently open based on its hourly schedule.
 *
 * @param {IPlace} place - The place object containing hourly schedule information.
 * @returns {boolean} - Returns true if the place is currently open, otherwise false.
 */
export const checkHourly = (place: IPlace): boolean => {
  const currentTime = new Date();
  const currentDay = getDay(toZonedTime(new Date(), "America/Sao_Paulo"));
  const weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][currentDay];
  const openingHours = place?.hourly?.[weekDay];

  if (openingHours) {
    const { open, close } = openingHours;
    const currentHour = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const currentTotalMinutes = currentHour * 60 + currentMinutes;

    for (let i = 0; i < open.length; i++) {
      const [openHour, openMinute] = open[i].split(":").map(Number);
      const openTotalMinutes = openHour * 60 + openMinute;

      const [closeHour, closeMinute] = close[i].split(":").map(Number);
      const closeTotalMinutes = closeHour * 60 + closeMinute;

      if (
        currentTotalMinutes >= openTotalMinutes &&
        currentTotalMinutes <= closeTotalMinutes
      ) {
        return true;
      }
    }
  }

  return false;
};
