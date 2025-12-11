/**
 * Function: recurringTimer
 * Description: Starts a recurring timer that logs a message at fixed intervals.
 */
function recurringTimer(message, interval) {
  const id = setInterval(() => {
    console.log(message);
  }, interval);

  return id;
}

/**
 * Function: stopRecurringTimer
 * Description: Stops a recurring timer using its ID.
 */
function stopRecurringTimer(timerId) {
  clearInterval(timerId);
}

module.exports = { recurringTimer, stopRecurringTimer };
