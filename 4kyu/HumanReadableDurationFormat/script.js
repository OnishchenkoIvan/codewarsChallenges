function formatDuration(seconds) {
  if (seconds === 0) return "now";
  const duration = {
    seconds: null,
    minutes: null,
    hours: null,
    days: null,
    years: null,
  };
  if (seconds > 0) {
    duration.seconds = seconds % 60;
    duration.minutes = Math.floor(seconds / 60);
  }
  if (duration.minutes > 59) {
    duration.hours = Math.floor(duration.minutes / 60);
    duration.minutes = duration.minutes % 60;
  }
  if (duration.hours > 23) {
    duration.days = Math.floor(duration.hours / 24);
    duration.hours = duration.hours % 24;
  }
  if (duration.days > 364) {
    duration.years = Math.floor(duration.days / 365);
    duration.days = duration.days % 365;
  }

  let result = [];
  if (duration.years)
    result.push(
      duration.years > 1 ? `${duration.years} years` : `${duration.years} year`
    );
  if (duration.days)
    result.push(
      duration.days > 1 ? `${duration.days} days` : `${duration.days} day`
    );
  if (duration.hours)
    result.push(
      duration.hours > 1 ? `${duration.hours} hours` : `${duration.hours} hour`
    );
  if (duration.minutes)
    result.push(
      duration.minutes > 1
        ? `${duration.minutes} minutes`
        : `${duration.minutes} minute`
    );
  if (duration.seconds)
    result.push(
      duration.seconds > 1
        ? `${duration.seconds} seconds`
        : `${duration.seconds} second`
    );
  if (result.length === 1) return result[0];
  if (result.length === 2) return `${result[0]} and ${result[1]}`;
  if (result.length === 3) return `${result[0]}, ${result[1]} and ${result[2]}`;
  if (result.length === 4)
    return `${result[0]}, ${result[1]}, ${result[2]} and ${result[3]}`;
  if (result.length === 5)
    return `${result[0]}, ${result[1]}, ${result[2]}, ${result[3]} and ${result[4]}`;
}

console.log(formatDuration(15731080));
// console.log(formatDuration(62));
// console.log(formatDuration(120));
// console.log(formatDuration(3600));
// console.log(formatDuration(3662));
