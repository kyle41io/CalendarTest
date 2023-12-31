export const YEARS = Array.from({ length: 2060 - 1940 }, (_, i) => i + 1940);

export const daysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

export const getLocalizeMonth = (locale) => {
  try {
    return Array.from({ length: 12 }, (_, i) => {
      const date = new Date(2000, i, 1);
      return date.toLocaleString(locale, {
        month: "long",
      });
    });
  } catch (error) {
    console.log(error);
  }
};

export const getLocalizedDay = (locale) => {
  try {
    const days = Array.from({ length: 7 }, (_, i) => {
      const day = new Date(2000, 0, i + 1);
      return day.toLocaleDateString(locale, {
        weekday: "short",
      });
    });

    const saturday = days.shift(); 
    days.push(saturday);

    return days;
  } catch (error) {
    console.log(error);
  }
};