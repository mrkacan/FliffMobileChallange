// This function is used to calculate the time difference between the current time and the time passed as a parameter
// It returns a string with the time difference in the format: 1d, 2h, 3m, 4s
export const calculateDateFromNow = (date?: string) => {
  if (!date) {
    return '';
  }
  const now = new Date();
  const dateToCompare = new Date(date);
  const difference = now.getTime() - dateToCompare.getTime();
  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  if (days > 0) {
    return `${days}d`;
  }
  if (hours > 0) {
    return `${hours}h`;
  }
  if (minutes > 0) {
    return `${minutes}m`;
  }
  if (seconds > 0) {
    return `${seconds}s`;
  }
  return '0s';
};
