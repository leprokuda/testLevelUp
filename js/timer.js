let sec = 1800,
  countDiv = document.getElementById("timer"),
  countDown = setInterval(function () {
    'use strict';
    secpass();
  }, 1000);

function secpass() {
  'use strict';
  let min = Math.floor(sec / 60),
      remSec = sec % 60;
  if (remSec < 10) {
      remSec = '0' + remSec;
  }
  if (min < 10) {
    min = '0' + min;
  }
  countDiv.innerHTML = min + ":" + remSec;
  if (sec > 0) {
    sec = sec - 1;
  } else {
    clearInterval(countDown);
  }
}