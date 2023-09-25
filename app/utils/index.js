export const YEARS = Array.from({ length: 2060 - 1960 }, (_, i) => i + 1960);

export const compareMonth = (value, month) => {
  return value.getMonth() + 1 === month;
};

export const getLocalizeMonth = (year, locale) => {
  try {
    return Array.from({ length: 12 }, (_, i) => {
      const date = new Date(year, i, 1);
      return date.toLocaleString(locale, {
        month: "long",
      });
    });
  } catch (error) {
    console.log(error);
  }
};

export const getLocalizedDay = (year, month, locale) => {
  try {
    return Array.from({ length: 7 }, (_, i) => {
      const day = new Date(year, month, i + 1);

      return day.toLocaleDateString(locale, {
        weekday: "short",
      });
    });
  } catch (error) {
    console.log(error);
  }
};
