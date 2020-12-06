// Countdown to event date
const countDown = (
  eleDaysId,
  EleHoursId,
  EleMinutesId,
  eleSecondsId,
  eDate
) => {
  // Current date in ms
  const currentDate = new Date(Date.now());
  // Event date in ms
  const eventDate = eDate;
  // Remaining time to event date in ms
  const remainTime = eventDate - currentDate;

  // Number of days until the event
  const dayToMs = 24 * 60 * 60 * 1000;
  const days = Math.floor(remainTime / dayToMs);
  // Number of hours until the event
  const hourToMs = 60 * 60 * 1000;
  const hours = Math.floor((remainTime - days * dayToMs) / hourToMs);
  // Number of minutes until the event
  const minuteToMs = 60 * 1000;
  const minutes = Math.floor(
    (remainTime - hours * hourToMs - days * dayToMs) / minuteToMs
  );
  // Number of seconds until the event
  const secondToMs = 1000;
  const seconds = Math.floor(
    (remainTime - minutes * minuteToMs - days * dayToMs - hours * hourToMs) /
      secondToMs
  );

  document.getElementById(eleDaysId).innerHTML = days.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
  document.getElementById(EleHoursId).innerHTML = hours.toLocaleString(
    'en-US',
    { minimumIntegerDigits: 2, useGrouping: false }
  );
  document.getElementById(EleMinutesId).innerHTML = minutes.toLocaleString(
    'en-US',
    {
      minimumIntegerDigits: 2,
      useGrouping: false
    }
  );
  document.getElementById(eleSecondsId).innerHTML = seconds.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });

  setTimeout(() => {
    countDown(eleDaysId, EleHoursId, EleMinutesId, eleSecondsId, eDate);
  }, 1000);
};

document.addEventListener('DOMContentLoaded', () => {
  countDown('days', 'hours', 'minutes', 'seconds', new Date(2021, 01, 13));
});

// Scroll to top
var scrollToTopBtn = document.getElementById('scrollToTopBtn');
var rootElement = document.documentElement;

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
scrollToTopBtn.addEventListener('click', scrollToTop);

// Track switching
var data = {
  track1: {
    title: 'Track Title 1',
    content:
      'Track Content 1, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
  },
  track2: {
    title: 'Track Title 2',
    content:
      'Track Content 2, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
  },
  track3: {
    title: 'Track Title 3',
    content:
      'Track Content 3, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
  }
};

function switchClick(track) {
  var title = document.getElementById('trackTitle');
  var content = document.getElementById('trackContent');
  var icon1 = document.getElementById('trackIcon1');
  var icon2 = document.getElementById('trackIcon2');
  var icon3 = document.getElementById('trackIcon3');

  if (track === 'track1') {
    title.innerHTML = data.track1.title;
    content.innerHTML = data.track1.content;
    icon1.classList.add('active');
    icon2.classList.remove('active');
    icon3.classList.remove('active');
  }
  if (track === 'track2') {
    title.innerHTML = data.track2.title;
    content.innerHTML = data.track2.content;
    icon1.classList.remove('active');
    icon2.classList.add('active');
    icon3.classList.remove('active');
  }
  if (track === 'track3') {
    title.innerHTML = data.track3.title;
    content.innerHTML = data.track3.content;
    icon1.classList.remove('active');
    icon2.classList.remove('active');
    icon3.classList.add('active');
  }
}

// Init AOS
AOS.init();
