const STORAGE_KEY = "tourWasShown";

export const useShowTour = () => {
  const tourWasShown = Boolean(localStorage.getItem(STORAGE_KEY) == "true");

  const setTourWasShown = (value) => {
    // Some type validations as TS is not available.
    // (For objects and arrays, we're gonna simply consider it true).
    if (typeof value == "string") value = value == "true";
    if (typeof value == "number") value = value == 1 ? true : false;
    localStorage.setItem(STORAGE_KEY, Boolean(value));
  };

  return { tourWasShown, setTourWasShown };
};
