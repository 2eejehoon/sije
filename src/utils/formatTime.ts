export const formatTime = (date: Date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formatHours = hours < 10 ? "0" + hours : hours;
  const formatMinutes = minutes < 10 ? "0" + minutes : minutes;

  return formatHours + ":" + formatMinutes;
};

export const formatTimeWithSeconds = (date: Date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const formatHours = hours < 10 ? "0" + hours : hours;
  const formatMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formatSeconds = seconds < 10 ? "0" + seconds : seconds;

  return formatHours + ":" + formatMinutes + ":" + formatSeconds;
};
