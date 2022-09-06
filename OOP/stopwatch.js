function StopWatch() {
  let startTime, endTime, running, duration = 0;

  this.start = () => {
    if(running) console.log('Stop watch is already running');
    else {
      startTime = new Date();
      running = true;
    }
  }

  this.end = () => {
    if(!running) console.log("Stop watch isn't running");
    else {
      endTime = new Date();
      running = false;
      const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
      duration += seconds;
    }
  }

  this.reset = () => {
    startTime = 0;
    endTime = 0;
    running = false;
    duration = 0;
  }

  Object.defineProperty(this, 'duration', {
    get: () => {

      return duration + ' seconds';
    },
  });
}