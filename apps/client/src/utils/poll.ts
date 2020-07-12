let intervalID = 0;

function createPoll(fn: () => void, interval = 1000): { start: () => void; restart: () => void; cancel: () => void } {
  return {
    start() {
      fn();
      intervalID = setInterval(fn, interval);
    },
    restart() {
      clearInterval(intervalID);
      intervalID = setInterval(fn, interval);
    },
    cancel() {
      clearInterval(intervalID);
    },
  };
}

export { createPoll };
