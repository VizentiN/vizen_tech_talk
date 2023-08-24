AOS.init();

const eventDate = new Date("Sep 12, 2023 19:30:00");
const eventTimeStamp = eventDate.getTime();

const countHour = setInterval(function() {
    const now = new Date();
    const nowTimeStamp = now.getTime();

    const eventDistance = eventTimeStamp - nowTimeStamp;

    const dayInMs = 1000 * 60 * 60 * 24;
    const hourInMs = 1000 * 60 * 60;
    const minInMs = 1000 * 60;
    const secInMs = 1000;


    const daysToEventStart = Math.floor(eventDistance / dayInMs);
    const hoursToEventStart = Math.floor((eventDistance % dayInMs) / hourInMs);
    const minutesToEventStart = Math.floor((eventDistance % hourInMs) / minInMs);
    const secondsToEventStart = Math.floor((eventDistance % minInMs) / secInMs);

    document.getElementById('counter').innerHTML = `${daysToEventStart}d ${hoursToEventStart}h ${minutesToEventStart}m ${secondsToEventStart}s`;

    if (eventDistance < 0) {
        clearInterval(countHour);
        document.getElementById('counter').innerHTML = `00d 00h 00m 00s`;
    }
}, 1000);