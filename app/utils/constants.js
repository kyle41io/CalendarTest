export const YEARS = Array.from({ length: 2060 - 1940 }, (_, i) => i + 1940);

export const daysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

