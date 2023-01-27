export const calculateDaysPassed = (startDate: string) => {
  const startingDate: Date = new Date(startDate);
  const currentDate = Date.now();
  const timePassed = Math.abs(currentDate - startingDate.getTime());
  const daysPassed = Math.ceil(timePassed / (1000 * 60 * 60 * 24));

  return daysPassed;
};
