

window.onload = function ()
{
    var onViewAnimatedElements = document.querySelectorAll(".panelTitle");
    onViewAnimatedElements.forEach(element =>
    {
        observer.observe(element);
    });
};



var countdownDate = new Date("Sep 11, 2022 20:00:00").getTime();


// Update the count down every 1 second
var x = setInterval(function ()
{

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countdownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (days < 100) { days = "0" + days }
    if (days < 10) { days = "0" + days; }
    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }

    // Display the result in the element with id="demo"
    document.getElementById("sekund1").innerHTML = seconds.toString()[0];
    document.getElementById("sekund2").innerHTML = seconds.toString()[1];

    document.getElementById("minut1").innerHTML = minutes.toString()[0];
    document.getElementById("minut2").innerHTML = minutes.toString()[1];

    document.getElementById("timme1").innerHTML = hours.toString()[0];
    document.getElementById("timme2").innerHTML = hours.toString()[1];

    document.getElementById("dag1").innerHTML = days.toString()[0];
    document.getElementById("dag2").innerHTML = days.toString()[1];
    document.getElementById("dag3").innerHTML = days.toString()[2];


}, 1000);

const observerOptions = {
    root: document.querySelector(null),
    rootMargin: '0px',
    threshold: 0.1
}

var observer = new IntersectionObserver(entries =>
{

    entries.forEach(element =>
    {
        if (element.intersectionRatio > 0)
        {

            // entry.style.animationPlayState = "running";


        } else
        {
            console.log('out of view');
        }


    })
}, observerOptions);




