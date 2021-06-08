function returnDay(num) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  if (num > 0 && num <= days.length) {
    return days[num - 1];
  } else {
    return null;
  }
}
