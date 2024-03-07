// setTimeOut : run Function "once" after the "interval" of time
// setInterval : run Function "repeatedly" as soon it starts

function message(name) {
  console.log("hello there what up " + name);
}
console.log(
  "setTimeOut will come after me because of its asynchronous nature buddy"
);

setTimeout(message, 5000, "roy");

//setInterval
function messagerepeat(name) {
  console.log("hello there what up " + name);
}

// setInterval(messagerepeat, 5000, "roy");
